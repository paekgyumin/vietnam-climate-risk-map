let currentCategory = "all";
let currentMetric = "overall";

const map = L.map("map", { zoomControl: true }).setView([15.9, 107.9], 5.5);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

document.getElementById("regionCount").textContent = RISK_DATA.length;

function levelName(score) {
  if (score >= 5) return "매우 높음";
  if (score >= 4) return "높음";
  if (score >= 3) return "보통";
  return "낮음";
}

function levelClass(score) {
  if (score >= 5) return "extreme";
  if (score >= 4) return "high";
  if (score >= 3) return "medium";
  return "low";
}

function markerColor(score) {
  if (score >= 5) return "#d94b4b";
  if (score >= 4) return "#f28b4b";
  if (score >= 3) return "#e3bf4c";
  return "#58a667";
}

function metricLabel(metric) {
  const labels = { overall:"종합 위험도", flood:"홍수", heat:"폭염", drought:"가뭄", rain:"집중호우", salinity:"염수 침입" };
  return labels[metric];
}

function visibleScore(region) {
  if (currentCategory === "plant") {
    return Math.max(region.drought, region.rain, region.salinity);
  }
  if (currentCategory === "human") {
    return Math.max(region.flood, region.heat, region.rain);
  }
  if (currentCategory === "animal") {
    return Math.max(region.flood, region.drought, region.rain);
  }
  return region[currentMetric];
}

const layers = [];

function renderMarkers() {
  layers.forEach(layer => map.removeLayer(layer));
  layers.length = 0;

  RISK_DATA.forEach(region => {
    const score = visibleScore(region);
    const radius = 9000 + score * 4200;

    const circle = L.circle([region.lat, region.lng], {
      radius,
      color: markerColor(score),
      fillColor: markerColor(score),
      fillOpacity: 0.42,
      weight: 2
    }).addTo(map);

    circle.bindPopup(`
      <div class="popup-title">${region.name}</div>
      <div class="popup-risk">${currentCategory === "all" ? metricLabel(currentMetric) : categoryName(currentCategory)} · ${levelName(score)}</div>
      <p style="font-size:11px;margin:7px 0 0;">클릭하면 상세 분석을 확인할 수 있습니다.</p>
    `);

    circle.on("click", () => showDetail(region));
    layers.push(circle);
  });
}

function categoryName(category) {
  return {human:"사람", animal:"동물", plant:"식물"}[category] || "전체";
}

function showDetail(region) {
  const welcome = document.getElementById("welcome");
  const detail = document.getElementById("detail");
  welcome.classList.add("hidden");
  detail.classList.remove("hidden");

  detail.innerHTML = `
    <div class="detail-title">
      <div>
        <span class="panel-kicker">REGIONAL ANALYSIS</span>
        <h2>${region.name}</h2>
      </div>
      <span class="risk-pill risk-${levelClass(region.overall)}">${levelName(region.overall)}</span>
    </div>
    <p>${region.name}에서 조사한 주요 기후위험을 사람·동물·식물의 관점으로 정리했습니다.</p>

    <div class="detail-grid">
      ${metricCard("홍수", region.flood)}
      ${metricCard("폭염", region.heat)}
      ${metricCard("가뭄", region.drought)}
      ${metricCard("집중호우", region.rain)}
      ${metricCard("염수 침입", region.salinity)}
      ${metricCard("종합", region.overall)}
    </div>

    <div class="detail-section">
      <h3>👤 사람</h3>
      <p>${region.human}</p>
    </div>
    <div class="detail-section">
      <h3>🐾 동물</h3>
      <p>${region.animal}</p>
    </div>
    <div class="detail-section">
      <h3>🌱 식물</h3>
      <p>${region.plant}</p>
    </div>
    <div class="detail-section">
      <h3>대응 방향</h3>
      <p class="action">${region.response}</p>
    </div>
  `;
}

function metricCard(name, score) {
  return `
    <div class="metric">
      <small>${name}</small>
      <b>${levelName(score)}</b>
      <div class="bar"><i style="width:${score * 20}%"></i></div>
    </div>
  `;
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    currentCategory = button.dataset.category;
    renderMarkers();
  });
});

document.getElementById("riskLevel").addEventListener("change", (e) => {
  currentMetric = e.target.value;
  currentCategory = "all";
  document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
  document.querySelector('[data-category="all"]').classList.add("active");
  renderMarkers();
});

renderMarkers();
