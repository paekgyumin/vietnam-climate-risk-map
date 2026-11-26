let currentCategory = "all";
let currentMetric = "overall";


// ========================================
// 지도 생성
// ========================================

const map = L.map("map", {
  zoomControl: true
}).setView([21.0285, 105.8542], 11);


// ========================================
// 지도 타일
// ========================================

L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
  }
).addTo(map);


// ========================================
// 마커 저장
// ========================================

let markers = [];


// ========================================
// 위험도 → 색
// ========================================

function getRiskColor(score) {

  if (score <= 1) {
    return "#2ecc71";
  }

  if (score <= 2) {
    return "#a8d840";
  }

  if (score <= 3) {
    return "#f1c40f";
  }

  if (score <= 4) {
    return "#f39c12";
  }

  return "#e74c3c";
}


// ========================================
// 위험도 → 크기
// ========================================

function getRadius(score) {

  return 8 + (score * 2.5);

}


// ========================================
// 위험도 이름
// ========================================

function getRiskName(score) {

  const names = {
    1: "매우 낮음",
    2: "낮음",
    3: "보통",
    4: "높음",
    5: "매우 높음"
  };

  return names[score];

}


// ========================================
// 위험도 설명
// ========================================

function getRiskDescription(score) {

  const descriptions = {
    1: "위험 가능성이 비교적 낮은 지역",
    2: "위험 가능성이 낮은 지역",
    3: "일부 기후위험에 주의가 필요한 지역",
    4: "기후위험에 대한 대비가 필요한 지역",
    5: "기후위험이 매우 높다고 추정되는 지역"
  };

  return descriptions[score];

}


// ========================================
// 카테고리 이름
// ========================================

function categoryLabel(category) {

  const labels = {

    all: "전체",

    human: "👤 사람",

    animal: "🐾 동물",

    plant: "🌱 식물"

  };

  return labels[category];

}


// ========================================
// 위험 유형 이름
// ========================================

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

  return labels[metric];

}


// ========================================
// 카테고리별 점수 보정
// ========================================

function getCategoryScore(point) {

  let score = point[currentMetric];

  /*
    사람 / 동물 / 식물 선택 시
    기본 위험도를 약간 다르게 보여준다.

    실제 측정값이 아니라 탐구용 시각화이므로
    각 대상에 대한 상대적인 영향 차이를 표현한다.
  */

  if (currentCategory === "human") {

    if (
      currentMetric === "heat" ||
      currentMetric === "air" ||
      currentMetric === "flood" ||
      currentMetric === "rain"
    ) {
      score += 0.4;
    }

  }

  if (currentCategory === "animal") {

    if (
      currentMetric === "flood" ||
      currentMetric === "rain" ||
      currentMetric === "green"
    ) {
      score += 0.4;
    }

  }

  if (currentCategory === "plant") {

    if (
      currentMetric === "drought" ||
      currentMetric === "heat" ||
      currentMetric === "flood" ||
      currentMetric === "rain"
    ) {
      score += 0.4;
    }

  }


  score = Math.max(1, Math.min(5, score));

  return Math.round(score);

}


// ========================================
// 마커 제거
// ========================================

function clearMarkers() {

  markers.forEach(marker => {

    map.removeLayer(marker);

  });

  markers = [];

}


// ========================================
// 지도에 마커 표시
// ========================================

function renderMarkers() {

  clearMarkers();


  RISK_DATA.forEach(point => {

    const score = getCategoryScore(point);

    const color = getRiskColor(score);

    const radius = getRadius(score);


    const marker = L.circleMarker(
      [point.lat, point.lng],
      {

        radius: radius,

        fillColor: color,

        color: "#ffffff",

        weight: 2,

        opacity: 0.9,

        fillOpacity: 0.58

      }
    );


    marker.bindTooltip(

      `
      <div class="tooltip-box">

        <strong>${point.name}</strong>

        <br>

        ${metricLabel(currentMetric)}

        :
        <strong>${getRiskName(score)}</strong>

      </div>
      `,

      {
        direction: "top",

        opacity: 0.95

      }

    );


    marker.on("click", () => {

      showDetail(point, score);

    });


    marker.addTo(map);

    markers.push(marker);

  });


  updateStatus();

}


// ========================================
// 상세 정보
// ========================================

function showDetail(point, score) {

  const panel =
    document.getElementById("detailPanel");


  panel.innerHTML = `

    <div class="detail-card">

      <div class="detail-header">

        <div>

          <span class="small-label">
            분석 지점
          </span>

          <h2>
            ${point.name}
          </h2>

        </div>

        <div
          class="risk-number"
          style="background:${getRiskColor(score)}">
          ${score}
        </div>

      </div>


      <div class="risk-result">

        <div>

          <span>
            현재 선택
          </span>

          <strong>
            ${metricLabel(currentMetric)}
          </strong>

        </div>


        <div>

          <span>
            위험 수준
          </span>

          <strong>
            ${getRiskName(score)}
          </strong>

        </div>

      </div>


      <p class="description">

        ${getRiskDescription(score)}

      </p>


      <div class="all-risk-grid">

        ${makeRiskBox("🌡️ 폭염", point.heat)}

        ${makeRiskBox("🌫️ 대기질", point.air)}

        ${makeRiskBox("🌊 침수", point.flood)}

        ${makeRiskBox("🌧️ 집중호우", point.rain)}

        ${makeRiskBox("💧 가뭄", point.drought)}

        ${makeRiskBox("🌳 녹지", point.green)}

      </div>


      <div class="coordinate">

        📍 좌표

        ${point.lat.toFixed(4)},
        ${point.lng.toFixed(4)}

      </div>

    </div>

  `;

}


// ========================================
// 위험도 박스
// ========================================

function makeRiskBox(name, score) {

  return `

    <div class="risk-box">

      <span>
        ${name}
      </span>

      <strong
        style="color:${getRiskColor(score)}">
        ${score}/5
      </strong>

    </div>

  `;

}


// ========================================
// 상단 상태 표시
// ========================================

function updateStatus() {

  const status =
    document.getElementById("currentStatus");

  status.textContent =
    `${metricLabel(currentMetric)} · ${categoryLabel(currentCategory)}`;

}


// ========================================
// 대상 버튼
// ========================================

document
  .querySelectorAll(".category-filter")
  .forEach(button => {

    button.addEventListener("click", () => {

      document
        .querySelectorAll(".category-filter")
        .forEach(btn => {

          btn.classList.remove("active");

        });


      button.classList.add("active");


      currentCategory =
        button.dataset.category;


      renderMarkers();

    });

  });


// ========================================
// 위험 유형 버튼
// ========================================

document
  .querySelectorAll(".metric-filter")
  .forEach(button => {

    button.addEventListener("click", () => {

      document
        .querySelectorAll(".metric-filter")
        .forEach(btn => {

          btn.classList.remove("active");

        });


      button.classList.add("active");


      currentMetric =
        button.dataset.metric;


      renderMarkers();

    });

  });


// ========================================
// 초기 실행
// ========================================

renderMarkers();
