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
    card.innerHTML = `
      <div class="thumb">
        <img src="${safeText(item.img)}" alt="${safeText(item.label)} image" loading="lazy" />
      </div>
      <div class="content">
        <span class="tag">${safeText(item.label)}</span>
        <h3 class="fact">${safeText(item.fact)}</h3>
        <p class="why"><b>Why it matters:</b> ${safeText(item.why)}</p>
        <div class="insight"><b>Consultant insight:</b> ${safeText(item.insight)}</div>
      </div>
    `;
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

  list.forEach(item => {
    const card = document.createElement("article");
    card.className = "spot-card";
    card.innerHTML = `
      <div class="spot-img">
        <img src="${safeText(item.img)}" alt="${safeText(item.title)}" loading="lazy" />
      </div>
      <div class="spot-body">
        <div class="spot-meta">
          <span class="spot-pill">${safeText(item.tag)}</span>
          <span class="spot-date">${safeText(item.date)}</span>
        </div>
        <h3 class="spot-title">${safeText(item.title)}</h3>
        <p class="spot-text">${safeText(item.text)}</p>
      </div>
    `;
    el.appendChild(card);
  });
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
});
