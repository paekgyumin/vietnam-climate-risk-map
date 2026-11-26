const RISK_DATA = [

  {
    id: 1,
    name: "Hoàn Kiếm 분석지점 01",
    lat: 21.0285,
    lng: 105.8542,
    overall: 5,
    heat: 5,
    air: 5,
    flood: 3,
    rain: 4,
    drought: 3,
    green: 5
  },

  {
    id: 2,
    name: "Ba Đình 분석지점 01",
    lat: 21.0338,
    lng: 105.8412,
    overall: 4,
    heat: 5,
    air: 4,
    flood: 3,
    rain: 4,
    drought: 3,
    green: 4
  },

  {
    id: 3,
    name: "Cầu Giấy 분석지점 01",
    lat: 21.0365,
    lng: 105.7905,
    overall: 4,
    heat: 4,
    air: 5,
    flood: 4,
    rain: 4,
    drought: 3,
    green: 4
  },

  {
    id: 4,
    name: "Tây Hồ 분석지점 01",
    lat: 21.0665,
    lng: 105.8215,
    overall: 3,
    heat: 4,
    air: 4,
    flood: 4,
    rain: 4,
    drought: 3,
    green: 2
  },

  {
    id: 5,
    name: "Long Biên 분석지점 01",
    lat: 21.0458,
    lng: 105.8905,
    overall: 4,
    heat: 4,
    air: 4,
    flood: 5,
    rain: 5,
    drought: 3,
    green: 3
  },

  {
    id: 6,
    name: "Hoàng Mai 분석지점 01",
    lat: 20.9855,
    lng: 105.8655,
    overall: 5,
    heat: 5,
    air: 5,
    flood: 5,
    rain: 5,
    drought: 3,
    green: 5
  },

  {
    id: 7,
    name: "Thanh Xuân 분석지점 01",
    lat: 20.9985,
    lng: 105.8065,
    overall: 5,
    heat: 5,
    air: 5,
    flood: 4,
    rain: 4,
    drought: 3,
    green: 5
  },

  {
    id: 8,
    name: "Hà Đông 분석지점 01",
    lat: 20.9705,
    lng: 105.7775,
    overall: 4,
    heat: 5,
    air: 4,
    flood: 4,
    rain: 5,
    drought: 4,
    green: 4
  },

  {
    id: 9,
    name: "Đống Đa 분석지점 01",
    lat: 21.0145,
    lng: 105.8245,
    overall: 5,
    heat: 5,
    air: 5,
    flood: 4,
    rain: 4,
    drought: 3,
    green: 5
  },

  {
    id: 10,
    name: "Sóc Sơn 분석지점 01",
    lat: 21.2575,
    lng: 105.8465,
    overall: 3,
    heat: 3,
    air: 3,
    flood: 3,
    rain: 3,
    drought: 4,
    green: 1
  },


  /* =========================
     북쪽
  ========================= */

  {
    id: 11,
    name: "북부 분석지점 A",
    lat: 21.145,
    lng: 105.78,
    overall: 3,
    heat: 3,
    air: 3,
    flood: 3,
    rain: 3,
    drought: 4,
    green: 2
  },

  {
    id: 12,
    name: "북부 분석지점 B",
    lat: 21.175,
    lng: 105.84,
    overall: 3,
    heat: 3,
    air: 3,
    flood: 4,
    rain: 4,
    drought: 4,
    green: 2
  },

  {
    id: 13,
    name: "북부 분석지점 C",
    lat: 21.205,
    lng: 105.90,
    overall: 3,
    heat: 3,
    air: 3,
    flood: 3,
    rain: 3,
    drought: 4,
    green: 1
  },

  {
    id: 14,
    name: "북부 분석지점 D",
    lat: 21.235,
    lng: 105.76,
    overall: 2,
    heat: 2,
    air: 2,
    flood: 2,
    rain: 3,
    drought: 4,
    green: 1
  },

  {
    id: 15,
    name: "북부 분석지점 E",
    lat: 21.265,
    lng: 105.90,
    overall: 3,
    heat: 3,
    air: 3,
    flood: 3,
    rain: 3,
    drought: 4,
    green: 1
  },


  /* =========================
     북동쪽
  ========================= */

  {
    id: 16,
    name: "북동부 분석지점 A",
    lat: 21.11,
    lng: 105.94,
    overall: 4,
    heat: 3,
    air: 4,
    flood: 4,
    rain: 4,
    drought: 3,
    green: 2
  },

  {
    id: 17,
    name: "북동부 분석지점 B",
    lat: 21.14,
    lng: 106.00,
    overall: 3,
    heat: 3,
    air: 3,
    flood: 4,
    rain: 4,
    drought: 3,
    green: 1
  },

  {
    id: 18,
    name: "북동부 분석지점 C",
    lat: 21.18,
    lng: 105.97,
    overall: 3,
    heat: 3,
    air: 3,
    flood: 3,
    rain: 4,
    drought: 3,
    green: 1
  },


  /* =========================
     서쪽
  ========================= */

  {
    id: 19,
    name: "서부 분석지점 A",
    lat: 21.06,
    lng: 105.72,
    overall: 3,
    heat: 3,
    air: 3,
    flood: 3,
    rain: 4,
    drought: 3,
    green: 2
  },

  {
    id: 20,
    name: "서부 분석지점 B",
    lat: 21.02,
    lng: 105.70,
    overall: 4,
    heat: 4,
    air: 3,
    flood: 3,
    rain: 4,
    drought: 4,
    green: 2
  },

  {
    id: 21,
    name: "서부 분석지점 C",
    lat: 20.98,
    lng: 105.69,
    overall: 4,
    heat: 4,
    air: 3,
    flood: 4,
    rain: 4,
    drought: 4,
    green: 2
  },

  {
    id: 22,
    name: "서부 분석지점 D",
    lat: 20.93,
    lng: 105.72,
    overall: 3,
    heat: 3,
    air: 3,
    flood: 3,
    rain: 4,
    drought: 4,
    green: 1
  },

  {
    id: 23,
    name: "서부 분석지점 E",
    lat: 21.10,
    lng: 105.68,
    overall: 2,
    heat: 2,
    air: 2,
    flood: 2,
    rain: 3,
    drought: 4,
    green: 1
  },


  /* =========================
     중앙
  ========================= */

  {
    id: 24,
    name: "중앙 분석지점 A",
    lat: 21.015,
    lng: 105.86,
    overall: 5,
    heat: 5,
    air: 5,
    flood: 4,
    rain: 4,
    drought: 3,
    green: 5
  },

  {
    id: 25,
    name: "중앙 분석지점 B",
    lat: 21.045,
    lng: 105.84,
    overall: 5,
    heat: 5,
    air: 5,
    flood: 4,
    rain: 4,
    drought: 3,
    green: 5
  },

  {
    id: 26,
    name: "중앙 분석지점 C",
    lat: 21.07,
    lng: 105.86,
    overall: 4,
    heat: 5,
    air: 4,
    flood: 4,
    rain: 4,
    drought: 3,
    green: 3
  },

  {
    id: 27,
    name: "중앙 분석지점 D",
    lat: 20.99,
    lng: 105.84,
    overall: 5,
    heat: 5,
    air: 5,
    flood: 5,
    rain: 5,
    drought: 3,
    green: 4
  },

  {
    id: 28,
    name: "중앙 분석지점 E",
    lat: 21.075,
    lng: 105.79,
    overall: 4,
    heat: 4,
    air: 4,
    flood: 4,
    rain: 4,
    drought: 3,
    green: 3
  },


  /* =========================
     동쪽
  ========================= */

  {
    id: 29,
    name: "동부 분석지점 A",
    lat: 21.02,
    lng: 105.91,
    overall: 4,
    heat: 4,
    air: 4,
    flood: 5,
    rain: 5,
    drought: 3,
    green: 3
  },

  {
    id: 30,
    name: "동부 분석지점 B",
    lat: 20.98,
    lng: 105.93,
    overall: 4,
    heat: 4,
    air: 4,
    flood: 5,
    rain: 5,
    drought: 3,
    green: 2
  },

  {
    id: 31,
    name: "동부 분석지점 C",
    lat: 20.95,
    lng: 105.96,
    overall: 3,
    heat: 3,
    air: 3,
    flood: 4,
    rain: 4,
    drought: 3,
    green: 1
  },

  {
    id: 32,
    name: "동부 분석지점 D",
    lat: 21.08,
    lng: 105.95,
    overall: 3,
    heat: 3,
    air: 3,
    flood: 4,
    rain: 4,
    drought: 3,
    green: 2
  },


  /* =========================
     남쪽
  ========================= */

  {
    id: 33,
    name: "남부 분석지점 A",
    lat: 20.94,
    lng: 105.82,
    overall: 4,
    heat: 4,
    air: 4,
    flood: 4,
    rain: 5,
    drought: 4,
    green: 2
  },

  {
    id: 34,
    name: "남부 분석지점 B",
    lat: 20.90,
    lng: 105.85,
    overall: 3,
    heat: 4,
    air: 3,
    flood: 4,
    rain: 4,
    drought: 4,
    green: 1
  },

  {
    id: 35,
    name: "남부 분석지점 C",
    lat: 20.86,
    lng: 105.82,
    overall: 3,
    heat: 3,
    air: 3,
    flood: 3,
    rain: 4,
    drought: 4,
    green: 1
  },

  {
    id: 36,
    name: "남부 분석지점 D",
    lat: 20.91,
    lng: 105.91,
    overall: 4,
    heat: 4,
    air: 4,
    flood: 5,
    rain: 5,
    drought: 4,
    green: 2
  },


  /* =========================
     남서쪽
  ========================= */

  {
    id: 37,
    name: "남서부 분석지점 A",
    lat: 20.94,
    lng: 105.75,
    overall: 3,
    heat: 3,
    air: 3,
    flood: 3,
    rain: 4,
    drought: 4,
    green: 1
  },

  {
    id: 38,
    name: "남서부 분석지점 B",
    lat: 20.88,
    lng: 105.75,
    overall: 3,
    heat: 3,
    air: 3,
    flood: 3,
    rain: 4,
    drought: 4,
    green: 1
  },

  {
    id: 39,
    name: "남서부 분석지점 C",
    lat: 20.84,
    lng: 105.78,
    overall: 2,
    heat: 2,
    air: 2,
    flood: 2,
    rain: 3,
    drought: 4,
    green: 1
  },


  /* =========================
     추가 지점
  ========================= */

  {
    id: 40,
    name: "하천 주변 분석지점 A",
    lat: 21.06,
    lng: 105.88,
    overall: 4,
    heat: 3,
    air: 4,
    flood: 5,
    rain: 5,
    drought: 2,
    green: 2
  },

  {
    id: 41,
    name: "하천 주변 분석지점 B",
    lat: 21.00,
    lng: 105.90,
    overall: 5,
    heat: 4,
    air: 4,
    flood: 5,
    rain: 5,
    drought: 2,
    green: 3
  },

  {
    id: 42,
    name: "하천 주변 분석지점 C",
    lat: 20.96,
    lng: 105.89,
    overall: 4,
    heat: 4,
    air: 4,
    flood: 5,
    rain: 5,
    drought: 2,
    green: 2
  },

  {
    id: 43,
    name: "도심 분석지점 A",
    lat: 21.03,
    lng: 105.87,
    overall: 5,
    heat: 5,
    air: 5,
    flood: 4,
    rain: 4,
    drought: 3,
    green: 5
  },

  {
    id: 44,
    name: "도심 분석지점 B",
    lat: 21.00,
    lng: 105.82,
    overall: 5,
    heat: 5,
    air: 5,
    flood: 4,
    rain: 4,
    drought: 3,
    green: 5
  },

  {
    id: 45,
    name: "도심 분석지점 C",
    lat: 21.055,
    lng: 105.81,
    overall: 4,
    heat: 5,
    air: 5,
    flood: 3,
    rain: 4,
    drought: 3,
    green: 4
  },

  {
    id: 46,
    name: "외곽 분석지점 A",
    lat: 21.20,
    lng: 105.72,
    overall: 2,
    heat: 2,
    air: 2,
    flood: 2,
    rain: 3,
    drought: 4,
    green: 1
  },

  {
    id: 47,
    name: "외곽 분석지점 B",
    lat: 21.23,
    lng: 105.96,
    overall: 2,
    heat: 2,
    air: 2,
    flood: 2,
    rain: 3,
    drought: 4,
    green: 1
  },

  {
    id: 48,
    name: "외곽 분석지점 C",
    lat: 20.87,
    lng: 105.93,
    overall: 2,
    heat: 3,
    air: 2,
    flood: 3,
    rain: 3,
    drought: 4,
    green: 1
  },

  {
    id: 49,
    name: "외곽 분석지점 D",
    lat: 21.16,
    lng: 105.68,
    overall: 2,
    heat: 2,
    air: 2,
    flood: 2,
    rain: 3,
    drought: 4,
    green: 1
  },

  {
    id: 50,
    name: "녹지 분석지점 A",
    lat: 21.11,
    lng: 105.82,
    overall: 2,
    heat: 2,
    air: 2,
    flood: 2,
    rain: 3,
    drought: 3,
    green: 1
  },

  {
    id: 51,
    name: "녹지 분석지점 B",
    lat: 21.04,
    lng: 105.76,
    overall: 2,
    heat: 2,
    air: 2,
    flood: 2,
    rain: 3,
    drought: 3,
    green: 1
  },

  {
    id: 52,
    name: "녹지 분석지점 C",
    lat: 20.91,
    lng: 105.70,
    overall: 2,
    heat: 2,
    air: 2,
    flood: 2,
    rain: 3,
    drought: 3,
    green: 1
  },

  {
    id: 53,
    name: "남동부 분석지점 A",
    lat: 20.93,
    lng: 105.98,
    overall: 3,
    heat: 3,
    air: 3,
    flood: 4,
    rain: 4,
    drought: 4,
    green: 2
  },

  {
    id: 54,
    name: "남동부 분석지점 B",
    lat: 20.88,
    lng: 105.96,
    overall: 3,
    heat: 3,
    air: 3,
    flood: 4,
    rain: 4,
    drought: 4,
    green: 2
  },

  {
    id: 55,
    name: "북서부 분석지점 A",
    lat: 21.20,
    lng: 105.66,
    overall: 2,
    heat: 2,
    air: 2,
    flood: 2,
    rain: 3,
    drought: 4,
    green: 1
  },

  {
    id: 56,
    name: "북서부 분석지점 B",
    lat: 21.25,
    lng: 105.72,
    overall: 2,
    heat: 2,
    air: 2,
    flood: 2,
    rain: 3,
    drought: 4,
    green: 1
  },

  {
    id: 57,
    name: "중서부 분석지점 A",
    lat: 21.09,
    lng: 105.75,
    overall: 3,
    heat: 3,
    air: 3,
    flood: 3,
    rain: 4,
    drought: 4,
    green: 2
  },

  {
    id: 58,
    name: "중동부 분석지점 A",
    lat: 21.10,
    lng: 105.90,
    overall: 4,
    heat: 4,
    air: 4,
    flood: 4,
    rain: 4,
    drought: 3,
    green: 3
  },

  {
    id: 59,
    name: "남중부 분석지점 A",
    lat: 20.96,
    lng: 105.80,
    overall: 4,
    heat: 4,
    air: 4,
    flood: 4,
    rain: 5,
    drought: 4,
    green: 2
  },

  {
    id: 60,
    name: "남중부 분석지점 B",
    lat: 20.90,
    lng: 105.87,
    overall: 4,
    heat: 4,
    air: 4,
    flood: 5,
    rain: 5,
    drought: 4,
    green: 2
  }

];
