// Rendering and behaviour. Update article/spotlight content in data.js.
function $(id){ return document.getElementById(id); }
function safeText(s){ return (s ?? '').toString(); }
function escapeHTML(s){
  return safeText(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function kolkataDate(now = new Date()){
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit'
  }).formatToParts(now);
  const part = type => parts.find(p => p.type === type).value;
  return `${part('year')}-${part('month')}-${part('day')}`;
}
function validDate(value){
  if(typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0,10) === value;
}
function formatDate(value){
  return new Intl.DateTimeFormat('en-IN', {
    timeZone: 'UTC', day: 'numeric', month: 'short', year: 'numeric'
  }).format(new Date(`${value}T00:00:00Z`));
}
function safeURL(value){
  try {
    const url = new URL(value, window.location.href);
    return ['http:', 'https:'].includes(url.protocol) ? url.href : '';
  } catch { return ''; }
}
function paragraphs(value){
  return Array.isArray(value) ? value : safeText(value).split(/\n\s*\n/).filter(Boolean);
}
function textParagraphs(value){
  return paragraphs(value).map(p => `<p>${escapeHTML(p)}</p>`).join('');
}
const CATEGORY_LABELS = {news:'News', operations:'Operations', costing:'Costing', scaling:'Scaling', hygiene:'Hygiene'};
let articles = [], spotlights = [], articleIssues = 0, spotlightIssues = 0;
let articleDataFailed = false, archiveView = false;
let activeArticle = null, modalReturnHash = '#insights', modalReturnFocus = null, modalReturnCardId = null;

function validateContent(list, type){
  if(!Array.isArray(list)) throw new Error('Content is unavailable');
  const ids = new Set(), slugs = new Set();
  let rejected = 0;
  const valid = list.filter(item => {
    let ok = item && typeof item === 'object' &&
      ['id','title','image','imageAlt'].every(key => typeof item[key] === 'string' && item[key].trim()) &&
      safeURL(item.image) && ['draft','published'].includes(item.status) && !ids.has(item.id);
    if(ok && item.source != null){
      ok = typeof item.source === 'object' && typeof item.source.name === 'string' &&
        item.source.name.trim() && (!item.source.url || safeURL(item.source.url));
    }
    if(ok && type === 'article'){
      ok = typeof item.slug === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.slug) &&
        !slugs.has(item.slug) && Object.hasOwn(CATEGORY_LABELS, item.category) &&
        ['summary','why','insight'].every(key => typeof item[key] === 'string') &&
        (typeof item.body === 'string' || (Array.isArray(item.body) && item.body.every(p => typeof p === 'string'))) &&
        (item.publicationDate === null || validDate(item.publicationDate));
    }
    if(ok && type === 'spotlight'){
      const undated = item.startDate === null && item.endDate === null;
      const start = validDate(item.startDate), end = validDate(item.endDate);
      const startTime = start ? new Date(`${item.startDate}T00:00:00Z`) : null;
      const endTime = end ? new Date(`${item.endDate}T00:00:00Z`) : null;
      const weekly = start && end && startTime.getUTCDay() === 1 && endTime.getUTCDay() === 0 &&
        endTime - startTime === 6 * 86400000;
      ok = (undated || weekly) && typeof item.location === 'string' &&
        typeof item.category === 'string' && typeof item.takeaway === 'string' &&
        (typeof item.description === 'string' || (Array.isArray(item.description) && item.description.every(p => typeof p === 'string')));
    }
    if(!ok){ rejected++; return false; }
    ids.add(item.id);
    if(type === 'article') slugs.add(item.slug);
    return true;
  });
  return {valid, rejected};
}
function publishedArticles(today = kolkataDate(), list = articles){
  return list.filter(a => a.status === 'published' && (!a.publicationDate || a.publicationDate <= today))
    .map((article, order) => ({article, order}))
    .sort((a,b) => {
      const ad = a.article.publicationDate, bd = b.article.publicationDate;
      if(ad && bd) return bd.localeCompare(ad) || a.order - b.order;
      if(ad || bd) return ad ? -1 : 1;
      return a.order - b.order;
    }).map(entry => entry.article);
}
function selectSpotlight(list = spotlights, today = kolkataDate()){
  const eligible = list.filter(s => s.status === 'published' && s.startDate && s.startDate <= today)
    .sort((a,b) => b.startDate.localeCompare(a.startDate));
  return eligible.find(s => today <= s.endDate) || eligible[0] ||
    list.find(s => s.status === 'published' && !s.startDate) || null;
}
function articleHash(item){
  return `#insight/${item.slug}${archiveView ? '?from=archive' : ''}`;
}
function renderFunFacts(list){
  const cardsEl = $('cards');
  if(!cardsEl) return;
  cardsEl.replaceChildren();
  list.forEach(item => {
    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('role', 'link');
    card.tabIndex = 0;
    card.setAttribute('aria-label', `Read insight: ${item.title}`);
    card.dataset.articleId = item.id;
    card.innerHTML = `
      <div class="thumb"><img src="${escapeHTML(safeURL(item.image))}" alt="${escapeHTML(item.imageAlt)}" loading="lazy" /></div>
      <div class="content">
        <span class="tag">${CATEGORY_LABELS[item.category]}</span>
        ${item.publicationDate ? `<time class="article-date" datetime="${item.publicationDate}">${formatDate(item.publicationDate)}</time>` : ''}
        <h3 class="fact">${escapeHTML(item.title)}</h3>
        <p class="why"><b>Why it matters:</b> ${escapeHTML(item.why)}</p>
        <div class="insight"><b>Practical insight:</b> ${escapeHTML(item.insight)}</div>
        <a class="read-more" href="${articleHash(item)}">Read insight →</a>
      </div>`;
    card.addEventListener('click', event => {
      if(event.target.closest('a') || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      window.location.hash = articleHash(item);
    });
    card.addEventListener('keydown', event => {
      if(event.target === card && (event.key === 'Enter' || event.key === ' ')){
        event.preventDefault();
        window.location.hash = articleHash(item);
      }
    });
    cardsEl.appendChild(card);
  });
}
function applyFilters(){
  const query = ($('search')?.value || '').toLowerCase().trim();
  const category = $('filter')?.value || 'all';
  const available = publishedArticles();
  const list = archiveView ? available.filter(a => {
    const blob = [a.title, CATEGORY_LABELS[a.category], a.category, a.summary, a.why, a.insight, ...paragraphs(a.body)].join(' ').toLowerCase();
    return (category === 'all' || a.category === category) && (!query || blob.includes(query));
  }) : available.slice(0,6);
  $('insightsHeading').textContent = archiveView ? 'Explore All Insights' : 'Latest Insights';
  $('insightsNote').textContent = archiveView ? 'Search all published insights or choose a category.' : 'The latest six published insights.';
  $('archiveLink').hidden = archiveView;
  $('latestLink').hidden = !archiveView;
  $('insightsStatus').textContent = articleDataFailed ? 'Insights could not be loaded. Please reload the page and try again.' :
    articleIssues ? 'Some insights could not be loaded. Please check the content configuration.' :
    !list.length ? 'No insights found. Try another search or reset the filters.' :
    archiveView ? `${list.length} of ${available.length} insights` : '';
  renderFunFacts(list);
}
function searchArchive(){
  archiveView = true;
  history.replaceState(null, '', '#explore-insights');
  applyFilters();
}
function sourceMarkup(source){
  if(!source) return '';
  return source.url ? `<a href="${escapeHTML(safeURL(source.url))}" target="_blank" rel="noopener noreferrer">${escapeHTML(source.name)}</a>` : escapeHTML(source.name);
}
function renderSpotlight(list = spotlights){
  const el = $('spotlight');
  if(!el) return;
  const item = selectSpotlight(list);
  if(!item){
    el.innerHTML = '<p class="insights-note" role="status">The hospitality spotlight could not be loaded. Please try again later.</p>';
    return;
  }
  const date = item.startDate ? `${formatDate(item.startDate)} – ${formatDate(item.endDate)}` : item.displayDate;
  el.innerHTML = `
    <article class="spot-feature">
      <div class="spot-img"><img src="${escapeHTML(safeURL(item.image))}" alt="${escapeHTML(item.imageAlt)}" loading="lazy" /></div>
      <div class="spot-body">
        <div class="spot-meta"><span class="spot-pill">${escapeHTML(item.category)}</span>
          ${date ? `<span class="spot-date">${escapeHTML(date)}</span>` : ''}</div>
        <h3 class="spot-title">${escapeHTML(item.title)}</h3>
        <div class="spot-text">${textParagraphs(item.description)}</div>
        ${item.source ? `<p class="article-source">Source / credit: ${sourceMarkup(item.source)}</p>` : ''}
      </div>
    </article>
    <aside class="spot-takeaway"><span class="spot-kicker">Operational takeaway</span>
      <h3>What operators can learn</h3><p>${escapeHTML(item.takeaway)}</p></aside>
    ${spotlightIssues ? '<p class="insights-note" role="status">Some spotlight entries could not be loaded. Please check their dates and configuration.</p>' : ''}`;
}
function setupWhatsApp(){
  const phone = safeText(window.WA_PHONE).replace(/\D/g, '');
  const message = encodeURIComponent(safeText(window.WA_MESSAGE));
  const waLink = `https://wa.me/${phone}?text=${message}`;
  const top = $('btnWhatsAppTop');
  if(top){ top.href = waLink; top.target = '_blank'; }
  $('btnWhatsApp')?.addEventListener('click', () => window.open(waLink, '_blank'));
}
function setupHeaderScroll(){
  const header = document.querySelector('header');
  if(!header) return;
  const syncHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  syncHeader();
  window.addEventListener('scroll', syncHeader, {passive:true});
}
function openInsightModal(item){
  const modal = $('insightModal');
  if(!modal) return;
  if(!activeArticle) modalReturnFocus = document.activeElement;
  activeArticle = item;
  $('modalTag').textContent = CATEGORY_LABELS[item.category];
  $('modalTitle').textContent = item.title;
  $('modalText').textContent = item.why;
  $('modalTakeaway').textContent = item.insight;
  $('modalBody').innerHTML = textParagraphs(item.body);
  const date = $('modalDate');
  date.hidden = !item.publicationDate;
  date.textContent = item.publicationDate ? formatDate(item.publicationDate) : '';
  if(item.publicationDate) date.dateTime = item.publicationDate;
  else date.removeAttribute('datetime');
  const source = $('modalSource');
  source.hidden = !item.source;
  source.innerHTML = item.source ? `Source: ${sourceMarkup(item.source)}` : '';
  $('modalPermalink').href = articleHash(item);
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  $('modalClose')?.focus();
}
function hideInsightModal(){
  const modal = $('insightModal');
  if(!modal || modal.classList.contains('hidden')) return;
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  activeArticle = null;
  if(modalReturnFocus?.isConnected && modalReturnFocus !== document.body) modalReturnFocus.focus();
  else ([...$('cards').querySelectorAll('.card')].find(card => card.dataset.articleId === modalReturnCardId) ||
    $('cards')?.querySelector('.card') || $('search'))?.focus();
}
function closeInsightModal(){
  if(!activeArticle) return;
  history.replaceState(null, '', modalReturnHash);
  hideInsightModal();
}
function scrollToInsightsHeading(){
  requestAnimationFrame(() => {
    const heading = $('insightsHeading');
    if(!heading) return;
    const headerHeight = document.querySelector('header')?.getBoundingClientRect().height || 0;
    heading.style.scrollMarginTop = `${headerHeight + 16}px`;
    heading.scrollIntoView({behavior:'smooth', block:'start'});
  });
}
function handleRoute(){
  const hash = window.location.hash;
  if(hash.startsWith('#insight/')){
    if(!activeArticle) modalReturnCardId = document.activeElement?.closest('.card')?.dataset.articleId || null;
    const [slug, query = ''] = hash.slice('#insight/'.length).split('?');
    archiveView = new URLSearchParams(query).get('from') === 'archive';
    modalReturnHash = archiveView ? '#explore-insights' : '#insights';
    applyFilters();
    const item = publishedArticles().find(a => a.slug === slug);
    if(item) openInsightModal(item);
    else {
      hideInsightModal();
      $('insightsStatus').textContent = 'This insight is unavailable or has not been published.';
      $('insights').scrollIntoView();
    }
    return;
  }
  hideInsightModal();
  archiveView = hash === '#explore-insights';
  if(!archiveView){ $('search').value = ''; $('filter').value = 'all'; }
  applyFilters();
  if(archiveView || hash === '#insights') scrollToInsightsHeading();
}
function setupInsightModal(){
  const modal = $('insightModal');
  $('modalClose')?.addEventListener('click', closeInsightModal);
  modal?.addEventListener('click', event => { if(event.target === modal) closeInsightModal(); });
  document.addEventListener('keydown', event => {
    if(!activeArticle) return;
    if(event.key === 'Escape') closeInsightModal();
    if(event.key === 'Tab'){
      const focusable = [...modal.querySelectorAll('button, a[href]')].filter(el => el.getClientRects().length);
      const first = focusable[0], last = focusable[focusable.length-1];
      if(event.shiftKey && document.activeElement === first){ event.preventDefault(); last.focus(); }
      else if(!event.shiftKey && document.activeElement === last){ event.preventDefault(); first.focus(); }
    }
  });
  document.addEventListener('focusin', event => {
    if(activeArticle && !modal.contains(event.target)) $('modalClose')?.focus();
  });
}
document.addEventListener('DOMContentLoaded', () => {
  try {
    const result = validateContent(window.ARTICLES, 'article');
    articles = result.valid; articleIssues = result.rejected;
  } catch { articleDataFailed = true; }
  try {
    const result = validateContent(window.WEEKLY_SPOTLIGHT, 'spotlight');
    spotlights = result.valid; spotlightIssues = result.rejected;
  } catch { spotlightIssues = 1; }
  renderSpotlight();
  setupInsightModal();
  handleRoute();
  window.addEventListener('hashchange', handleRoute);
  ['archiveLink', 'latestLink'].forEach(id => {
    $(id)?.addEventListener('click', event => {
      if(event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      history.pushState(null, '', $(id).getAttribute('href'));
      handleRoute();
    });
  });
  $('search')?.addEventListener('input', searchArchive);
  $('filter')?.addEventListener('change', searchArchive);
  $('btnReset')?.addEventListener('click', () => {
    $('search').value = ''; $('filter').value = 'all'; applyFilters();
  });
  if($('year')) $('year').textContent = new Date().getFullYear();
  setupWhatsApp();
  setupHeaderScroll();
  let lastDate = kolkataDate();
  const refreshCalendar = () => {
    const today = kolkataDate();
    if(today !== lastDate){
      lastDate = today; renderSpotlight(); handleRoute();
    }
  };
  window.setInterval(refreshCalendar, 60000);
  document.addEventListener('visibilitychange', () => { if(!document.hidden) refreshCalendar(); });
});
