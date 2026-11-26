const riskData = [
  {
    name: "Hoàn Kiếm",
    lat: 21.0285,
    lng: 105.8542,
    heat: 5,
    air: 5,
    flood: 4,
    rain: 4,
    drought: 3,
    green: 2,
    human: "폭염·대기오염·도시 침수 위험이 모두 높은 도심 지역",
    animal: "녹지와 서식 공간이 제한되어 도시 생물다양성에 부담",
    plant: "높은 기온과 대기오염, 불투수면 증가로 식물 스트레스 증가",
    action: "가로수와 공원 확대, 폭염 쉼터, 대중교통 이용, 침수 배수시설 개선"
  },

  {
    name: "Ba Đình",
    lat: 21.0356,
    lng: 105.8342,
    heat: 4,
    air: 5,
    flood: 3,
    rain: 4,
    drought: 3,
    green: 3,
    human: "교통과 도시 활동으로 대기오염과 열 스트레스가 나타날 가능성이 높은 지역",
    animal: "도시 녹지에 의존하는 조류와 곤충의 서식 환경 변화",
    plant: "도심 고온과 대기오염에 따른 생장 스트레스",
    action: "녹지 연결성 확보와 차량 배출가스 저감"
  },

  {
    name: "Cầu Giấy",
    lat: 21.0369,
    lng: 105.7906,
    heat: 5,
    air: 5,
    flood: 5,
    rain: 4,
    drought: 3,
    green: 2,
    human: "고밀도 도시개발과 교통으로 폭염·대기오염·침수 위험이 큰 지역",
    animal: "녹지 감소와 건축물 증가로 서식 공간이 제한됨",
    plant: "불투수면 증가와 높은 기온으로 토양 수분과 생장 환경 악화",
    action: "도시 녹지 확대, 빗물 저류 공간 확보, 대중교통 이용"
  },

  {
    name: "Tây Hồ",
    lat: 21.0687,
    lng: 105.8230,
    heat: 3,
    air: 4,
    flood: 3,
    rain: 4,
    drought: 2,
    green: 5,
    human: "호수와 녹지가 상대적으로 많아 열 위험은 낮지만 집중호우 시 침수 가능성 존재",
    animal: "호수와 녹지가 수서생물·조류의 서식 환경 제공",
    plant: "수변 식생이 비교적 발달해 고온 완화에 유리",
    action: "호수 수질 관리와 수변 녹지 보전"
  },

  {
    name: "Thanh Xuân",
    lat: 20.9947,
    lng: 105.8062,
    heat: 5,
    air: 5,
    flood: 5,
    rain: 4,
    drought: 3,
    green: 2,
    human: "고밀도 주거·교통 지역으로 폭염과 대기오염, 침수 위험이 큼",
    animal: "도시 녹지 부족으로 서식 공간이 제한됨",
    plant: "아스팔트와 건축물 증가로 도시 열섬과 수분 부족 위험 증가",
    action: "학교·주거지 주변 녹화, 투수성 포장, 침수 대응 강화"
  },

  {
    name: "Hoàng Mai",
    lat: 20.9830,
    lng: 105.8630,
    heat: 4,
    air: 4,
    flood: 5,
    rain: 5,
    drought: 3,
    green: 2,
    human: "저지대와 도시 배수 문제로 집중호우 시 침수 위험이 높은 지역",
    animal: "습지와 수변 환경 변화에 영향을 받을 수 있음",
    plant: "침수와 장기간 토양 수분 변화가 식물 생장에 영향을 줄 수 있음",
    action: "배수시설 개선과 빗물 저장 공간 확대"
  },

  {
    name: "Long Biên",
    lat: 21.0470,
    lng: 105.8940,
    heat: 3,
    air: 4,
    flood: 4,
    rain: 4,
    drought: 3,
    green: 4,
    human: "도심보다 녹지가 있지만 강과 가까운 지역에서는 침수 위험이 존재",
    animal: "강변과 녹지 공간이 생물의 이동·서식 공간으로 활용됨",
    plant: "수변 환경이 식물 다양성 유지에 유리",
    action: "강변 녹지 보호와 홍수 대응 공간 유지"
  },

  {
    name: "Hà Đông",
    lat: 20.9710,
    lng: 105.7770,
    heat: 4,
    air: 4,
    flood: 5,
    rain: 5,
    drought: 3,
    green: 3,
    human: "도시 확장 지역에서 집중호우와 침수 위험이 커질 수 있음",
    animal: "도시 확장에 따라 기존 서식 공간이 감소할 가능성",
    plant: "건축 면적 증가로 토양과 녹지 공간이 감소",
    action: "신도시 개발 시 녹지·저류시설을 함께 확보"
  },

  {
    name: "Đống Đa",
    lat: 21.0160,
    lng: 105.8300,
    heat: 5,
    air: 5,
    flood: 4,
    rain: 4,
    drought: 3,
    green: 1,
    human: "높은 도시 밀도와 교통량으로 열·대기오염 위험이 높음",
    animal: "녹지 부족으로 도시 생물의 이동 공간이 제한됨",
    plant: "녹지 부족과 고온으로 식물의 열 스트레스가 증가할 수 있음",
    action: "도시 가로수 확대와 옥상·벽면 녹화"
  },

  {
    name: "Sóc Sơn",
    lat: 21.2570,
    lng: 105.8480,
    heat: 3,
    air: 3,
    flood: 3,
    rain: 4,
    drought: 4,
    green: 5,
    human: "도심보다 대기오염과 열 위험은 낮지만 강한 비와 산림 주변 위험에 주의",
    animal: "산림과 농촌 환경이 다양한 생물의 서식 공간을 제공",
    plant: "산림 생태계가 유지되는 지역으로 식물 다양성이 상대적으로 높음",
    action: "산림 보전, 산불 예방, 집중호우 시 산사태 관찰"
  },

  {
    name: "Đông Anh",
    lat: 21.1350,
    lng: 105.8500,
    heat: 3,
    air: 4,
    flood: 4,
    rain: 4,
    drought: 4,
    green: 4,
    human: "도시화가 진행되면서 폭염과 집중호우 위험이 변화하는 지역",
    animal: "농경지와 녹지가 생물 서식 공간 역할을 함",
    plant: "농경지의 고온·가뭄 및 집중호우 영향 가능",
    action: "농경지 배수 관리와 녹지 연결성 유지"
  },

  {
    name: "Gia Lâm",
    lat: 21.0140,
    lng: 105.9650,
    heat: 3,
    air: 4,
    flood: 4,
    rain: 4,
    drought: 4,
    green: 4,
    human: "도시와 농촌이 섞여 있어 개발과 기후 위험이 함께 나타나는 지역",
    animal: "농경지와 하천 주변이 생물 이동 경로로 활용될 수 있음",
    plant: "농업 지역에서 가뭄과 집중호우가 모두 문제가 될 수 있음",
    action: "농업용수 관리와 하천 주변 생태공간 보호"
  }
];
