let currentCategory = "all";
let currentMetric = "overall";

// 하노이 중심으로 지도 설정
const map = L.map("map", { zoomControl: true })
  .setView([21.0285, 105.8542], 11);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);


// =========================
// 기본 설정
// =========================

document.getElementById("regionCount").textContent = RISK_DATA.length;


// 위험도 이름
function levelName(score) {
  if (score >= 5) return "매우 높음";
  if (score >= 4) return "높음";
  if (score >= 3) return "보통";
  return "낮음";
}


// 위험도 CSS 클래스
function levelClass(score) {
  if (score >= 5) return "extreme";
  if (score >= 4) return "high";
  if (score >= 3) return "medium";
  return "low";
}


// 위험도별 색상
function markerColor(score) {
  if (score >= 5) return "#d94b4b";
  if (score >= 4) return "#f28b4b";
  if (score >= 3) return "#e3bf4c";
  return "#58a667";
}


// 위험도 이름
function metricLabel(metric) {
  const labels = {
    overall: "종합 위험도",
    heat: "폭염",
    air: "대기질",
    flood: "침수",
    rain: "집중호우",
    drought: "가뭄",
    green: "녹지"
  };

  return labels[metric] || "종합 위험도";
}


// =========================
// 선택한 위험도 점수 가져오기
// =========================

function visibleScore(region) {

  // 사람
  if (currentCategory === "human") {
    return Math.max(
      region.flood || 0,
      region.heat || 0,
      region.rain || 0
    );
  }

  // 동물
  if (currentCategory === "animal") {
    return Math.max(
      region.flood || 0,
      region.drought || 0,
      region.rain || 0
    );
  }

  // 식물
  if (currentCategory === "plant") {
    return Math.max(
      region.drought || 0,
      region.rain || 0
    );
  }

  // 전체 + 위험도 버튼
  if (currentMetric === "overall") {
    return region.overall || 0;
  }

  return region[currentMetric] || 0;
}


// =========================
// 지도 마커
// =========================

const layers = [];

function renderMarkers() {

  // 기존 원 삭제
  layers.forEach(layer => {
    map.removeLayer(layer);
  });

  layers.length = 0;


  // 모든 지역 표시
  RISK_DATA.forEach(region => {

    const score = visibleScore(region);

    // 위험도가 높을수록 원을 크게
    const radius = 2500 + score * 1000;

    const color = markerColor(score);


    const circle = L.circle(
      [region.lat, region.lng],
      {
        radius: radius,
        color: color,
        fillColor: color,
        fillOpacity: 0.45,
        weight: 2
      }
    ).addTo(map);


    // 팝업
    circle.bindPopup(`
      <div class="popup-title">
        ${region.name}
      </div>

      <div class="popup-risk">
        ${currentCategory === "all"
          ? metricLabel(currentMetric)
          : categoryName(currentCategory)}
        · ${levelName(score)}
      </div>

      <p style="
        font-size:11px;
        margin:7px 0 0;
      ">
        위험도 점수: ${score}/5
      </p>
    `);


    // 클릭하면 상세 정보
    circle.on("click", () => {
      showDetail(region);
    });


    layers.push(circle);
  });
}


// =========================
// 사람 / 동물 / 식물 이름
// =========================

function categoryName(category) {

  const names = {
    human: "사람",
    animal: "동물",
    plant: "식물"
  };

  return names[category] || "전체";
}


// =========================
// 지역 상세 정보
// =========================

function showDetail(region) {

  const welcome = document.getElementById("welcome");
  const detail = document.getElementById("detail");

  if (!welcome || !detail) return;

  welcome.classList.add("hidden");
  detail.classList.remove("hidden");


  detail.innerHTML = `

    <div class="detail-title">

      <div>
        <span class="panel-kicker">
          REGIONAL ANALYSIS
        </span>

        <h2>
          ${region.name}
        </h2>
      </div>

      <span class="risk-pill risk-${levelClass(region.overall)}">
        ${levelName(region.overall)}
      </span>

    </div>


    <p>
      ${region.name}에서 조사한 주요 기후위험을
      사람·동물·식물의 관점으로 정리했습니다.
    </p>


    <div class="detail-grid">

      ${metricCard("폭염", region.heat)}
      ${metricCard("대기질", region.air)}
      ${metricCard("침수", region.flood)}
      ${metricCard("집중호우", region.rain)}
      ${metricCard("가뭄", region.drought)}
      ${metricCard("녹지", region.green)}

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

      <h3>
        대응 방향
      </h3>

      <p class="action">
        ${region.response}
      </p>

    </div>
  `;
}


// =========================
// 위험도 카드
// =========================

function metricCard(name, score) {

  score = score || 0;

  return `

    <div class="metric">

      <small>
        ${name}
      </small>

      <b>
        ${levelName(score)}
      </b>

      <div class="bar">

        <i style="
          width:${score * 20}%
        "></i>

      </div>

    </div>
  `;
}


// =========================
// 사람 / 동물 / 식물 버튼
// =========================

document.querySelectorAll(".filter").forEach(button => {

  button.addEventListener("click", () => {

    document
      .querySelectorAll(".filter")
      .forEach(b => b.classList.remove("active"));

    button.classList.add("active");

    currentCategory =
      button.dataset.category || "all";

    currentMetric = "overall";

    renderMarkers();
  });

});


// =========================
// 위험도 버튼
// =========================

// 네 현재 HTML의 버튼
// .risk-filter
// data-risk="heat"
// data-risk="air"
// data-risk="flood"
// ...

document
  .querySelectorAll(".risk-filter")
  .forEach(button => {

    button.addEventListener("click", () => {

      // 위험도 버튼 활성화
      document
        .querySelectorAll(".risk-filter")
        .forEach(b => {
          b.classList.remove("active");
        });

      button.classList.add("active");


      // 선택된 위험도 가져오기
      currentMetric =
        button.dataset.risk || "overall";

      // 위험도 버튼을 누르면
      // 사람/동물/식물 필터는 전체로
      currentCategory = "all";


      // 지도 다시 그리기
      renderMarkers();

    });

  });


// =========================
// 최초 실행
// =========================

renderMarkers();
