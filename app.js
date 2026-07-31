// =========================
// LOGIC (you usually don't edit this file)
// =========================

function $(id){ return document.getElementById(id); }

function safeText(s){
  return (s ?? "").toString();
}

function renderFunFacts(list){
  const cardsEl = $("cards");
  if(!cardsEl) return;

  cardsEl.innerHTML = "";

  list.forEach(item => {
    const card = document.createElement("article");
    card.className = "card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Read insight: ${safeText(item.fact)}`);
    card.innerHTML = `
      <div class="thumb">
        <img src="${safeText(item.img)}" alt="${safeText(item.label)} image" loading="lazy" />
      </div>
      <div class="content">
        <span class="tag">${safeText(item.label)}</span>
        <h3 class="fact">${safeText(item.fact)}</h3>
        <p class="why"><b>Why it matters:</b> ${safeText(item.why)}</p>
        <div class="insight"><b>Practical insight:</b> ${safeText(item.insight)}</div>
        <span class="read-more">Read insight →</span>
      </div>
    `;
    card.addEventListener("click", () => openInsightModal(item));
    card.addEventListener("keydown", event => {
      if(event.key === "Enter" || event.key === " "){
        event.preventDefault();
        openInsightModal(item);
      }
    });
    cardsEl.appendChild(card);
  });
}

function applyFilters(){
  const q = ($("search")?.value || "").toLowerCase().trim();
  const topic = $("filter")?.value || "all";

  const list = (window.FUN_FACTS || []).filter(x => {
    const matchesTopic = (topic === "all") ? true : x.topic === topic;
    const blob = `${x.label} ${x.fact} ${x.why} ${x.insight}`.toLowerCase();
    const matchesSearch = q ? blob.includes(q) : true;
    return matchesTopic && matchesSearch;
  });

  renderFunFacts(list);
}

function renderSpotlight(list){
  const el = $("spotlight");
  if(!el) return;

  el.innerHTML = "";
  const item = list[0];
  if(!item) return;

  el.innerHTML = `
    <article class="spot-feature">
      <div class="spot-img">
        <img src="${safeText(item.img)}" alt="${safeText(item.title)}" loading="lazy" />
      </div>
      <div class="spot-body">
        <div class="spot-meta">
          <span class="spot-pill">${safeText(item.tag)}</span>
          ${item.date ? `<span class="spot-date">${safeText(item.date)}</span>` : ""}
        </div>
        <h3 class="spot-title">${safeText(item.title)}</h3>
        <p class="spot-text">${safeText(item.text)}</p>
      </div>
    </article>

    <aside class="spot-takeaway">
      <span class="spot-kicker">Operational takeaway</span>
      <h3>What operators can learn</h3>
      <p>${safeText(item.takeaway)}</p>
    </aside>
  `;
}

function setupWhatsApp(){
  const phone = safeText(window.WA_PHONE).replace(/\D/g, "");
  const message = encodeURIComponent(safeText(window.WA_MESSAGE));
  const waLink = `https://wa.me/${phone}?text=${message}`;

  const top = $("btnWhatsAppTop");
  if(top){
    top.href = waLink;
    top.target = "_blank";
  }

  const floatBtn = $("btnWhatsApp");
  if(floatBtn){
    floatBtn.addEventListener("click", () => window.open(waLink, "_blank"));
  }
}

function setupHeaderScroll(){
  const header = document.querySelector("header");
  if(!header) return;

  const syncHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });
}

function openInsightModal(item){
  const modal = $("insightModal");
  if(!modal) return;

  $("modalTag").textContent = safeText(item.label);
  $("modalTitle").textContent = safeText(item.fact);
  $("modalText").textContent = safeText(item.why);
  $("modalTakeaway").textContent = safeText(item.insight);

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  $("modalClose")?.focus();
}

function closeInsightModal(){
  const modal = $("insightModal");
  if(!modal || modal.classList.contains("hidden")) return;

  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function setupInsightModal(){
  const modal = $("insightModal");
  if(!modal) return;

  $("modalClose")?.addEventListener("click", closeInsightModal);
  modal.addEventListener("click", event => {
    if(event.target === modal) closeInsightModal();
  });
  document.addEventListener("keydown", event => {
    if(event.key === "Escape") closeInsightModal();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFunFacts(window.FUN_FACTS || []);
  renderSpotlight(window.WEEKLY_SPOTLIGHT || []);

  $("search")?.addEventListener("input", applyFilters);
  $("filter")?.addEventListener("change", applyFilters);

  $("btnReset")?.addEventListener("click", () => {
    $("search").value = "";
    $("filter").value = "all";
    applyFilters();
  });

  const y = $("year");
  if(y) y.textContent = new Date().getFullYear();

  setupWhatsApp();
  setupHeaderScroll();
  setupInsightModal();
});
