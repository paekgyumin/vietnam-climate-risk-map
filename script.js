let currentCategory = "all";
let currentMetric = "overall";


// ===============================
// 지도 생성
// ===============================

const map = L.map("map", {
  zoomControl: true
}).setView(
  [21.0285, 105.8542],
  11
);


L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 18,
    attribution:
      '&copy; OpenStreetMap contributors'
  }
).addTo(map);


// ===============================
// 위험도 함수
// ===============================

function levelName(score) {

  if (score >= 5) {
    return "매우 높음";
  }

  if (score >= 4) {
    return "높음";
  }

  if (score >= 3) {
    return "보통";
  }

  return "낮음";
}


function levelClass(score) {

  if (score >= 5) {
    return "extreme";
  }

  if (score >= 4) {
    return "high";
  }

  if (score >= 3) {
    return "medium";
  }

  return "low";
}


function markerColor(score) {

  if (score >= 5) {
    return "#d94b4b";
  }

  if (score >= 4) {
    return "#f28b4b";
  }

  if (score >= 3) {
    return "#e3bf4c";
  }

  return "#58a667";
}


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


// ===============================
// 분석 대상에 따른 점수
// ===============================

function getScore(region) {

  if (currentCategory === "human") {

    return Math.max(
      region.heat,
      region.air,
      region.flood,
      region.rain
    );

  }


  if (currentCategory === "animal") {

    return Math.max(
      region.flood,
      region.rain,
      region.drought
    );

  }


  if (currentCategory === "plant") {

    return Math.max(
      region.heat,
      region.rain,
      region.drought,
      region.green
    );

  }


  if (currentMetric !== "overall") {

    return region[currentMetric];

  }


  return region.overall;
}


// ===============================
// 지도 원 저장
// ===============================

let mapLayers = [];


// ===============================
// 지도 다시 그리기
// ===============================

function renderMap() {

  // 기존 원 제거
  mapLayers.forEach(layer => {
    map.removeLayer(layer);
  });

  mapLayers = [];


  // 지역별 원 생성
  RISK_DATA.forEach(region => {

    const score = getScore(region);

    const color = markerColor(score);

    const radius = 12 + score * 4;


    const circle = L.circleMarker(
      [region.lat, region.lng],
      {
        radius: radius,
        color: color,
        fillColor: color,
        fillOpacity: 0.45,
        opacity: 0.95,
        weight: 2
      }
    ).addTo(map);


    // 팝업
    circle.bindPopup(`

      <div class="popup-title">
        ${region.name}
      </div>

      <div class="popup-risk">
        ${metricLabel(currentMetric)}
      </div>

      <div class="popup-score">
        위험도 ${score}/5 · ${levelName(score)}
      </div>

    `);


    // 클릭하면 오른쪽 정보 변경
    circle.on("click", function () {
      showDetail(region);
    });


    mapLayers.push(circle);

  });
}


// ===============================
// 오른쪽 상세 정보
// ===============================

function showDetail(region) {

  const welcome =
    document.getElementById("welcome");

  const detail =
    document.getElementById("detail");


  welcome.style.display = "none";

  detail.classList.add("show");


  detail.innerHTML = `

    <div class="detail-title">

      <div>

        <div class="kicker">
          REGIONAL ANALYSIS
        </div>

        <h2>
          ${region.name}
        </h2>

      </div>

      <span class="
        risk-pill
        risk-${levelClass(region.overall)}
      ">
        ${levelName(region.overall)}
      </span>

    </div>


    <p>
      ${region.name}의 기후위험을
      사람·동물·식물의 관점에서 분석한 결과입니다.
    </p>


    <div class="risk-grid">

      ${riskCard("🌡️ 폭염", region.heat)}

      ${riskCard("🌫️ 대기질", region.air)}

      ${riskCard("🌊 침수", region.flood)}

      ${riskCard("🌧️ 집중호우", region.rain)}

      ${riskCard("💧 가뭄", region.drought)}

      ${riskCard("🌳 녹지", region.green)}

    </div>


    <div class="detail-section">

      <h3>
        👤 사람
      </h3>

      <p>
        ${region.human}
      </p>

    </div>


    <div class="detail-section">

      <h3>
        🐾 동물
      </h3>

      <p>
        ${region.animal}
      </p>

    </div>


    <div class="detail-section">

      <h3>
        🌱 식물
      </h3>

      <p>
        ${region.plant}
      </p>

    </div>


    <div class="detail-section">

      <h3>
        대응 방향
      </h3>

      <p class="response">
        ${region.response}
      </p>

    </div>

  `;
}


// ===============================
// 위험도 카드
// ===============================

function riskCard(name, score) {

  const color = markerColor(score);

  return `

    <div class="risk-card">

      <div class="risk-name">
        ${name}
      </div>

      <div class="risk-level">
        ${levelName(score)}
      </div>

      <div class="bar">

        <div
          class="bar-inner"
          style="
            width:${score * 20}%;
            background:${color};
          "
        ></div>

      </div>

    </div>

  `;
}


// ===============================
// 사람 / 동물 / 식물 버튼
// ===============================

document
  .querySelectorAll(".filter")
  .forEach(button => {

    button.addEventListener(
      "click",
      function () {

        document
          .querySelectorAll(".filter")
          .forEach(btn => {
            btn.classList.remove("active");
          });


        this.classList.add("active");


        currentCategory =
          this.dataset.category;


        currentMetric = "overall";


        // 위험도 버튼도 종합으로
        document
          .querySelectorAll(".risk-filter")
          .forEach(btn => {
            btn.classList.remove("active");
          });


        document
          .querySelector('[data-risk="overall"]')
          .classList.add("active");


        renderMap();

      }

    );

  });


// ===============================
// 폭염 / 대기질 / 침수 / 집중호우 / 가뭄 / 녹지
// ===============================

document
  .querySelectorAll(".risk-filter")
  .forEach(button => {

    button.addEventListener(
      "click",
      function () {

        document
          .querySelectorAll(".risk-filter")
          .forEach(btn => {
            btn.classList.remove("active");
          });


        this.classList.add("active");


        currentMetric =
          this.dataset.risk;


        // 위험도를 선택하면 전체 지역 기준
        currentCategory = "all";


        document
          .querySelectorAll(".filter")
          .forEach(btn => {
            btn.classList.remove("active");
          });


        document
          .querySelector('[data-category="all"]')
          .classList.add("active");


        renderMap();

      }

    );

  });


// ===============================
// 지역 수
// ===============================

document.getElementById(
  "regionCount"
).textContent = RISK_DATA.length;


// ===============================
// 최초 지도 표시
// ===============================

renderMap();
