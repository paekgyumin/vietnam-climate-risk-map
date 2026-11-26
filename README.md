# 🇻🇳 베트남 기후위험 지도 프로젝트

**Climate Risk Mapping · Vietnam**

베트남의 기후변화 관련 위험을 지역별로 조사하고, 사람·동물·식물에 미치는 영향을 인터랙티브 웹 지도 형태로 시각화한 학생 탐구 프로젝트입니다.

## 프로젝트 목표

- 베트남의 지역별 기후위험을 비교한다.
- 기후변화가 사람·동물·식물에 미치는 영향을 연결해서 살펴본다.
- 조사한 내용을 데이터로 구조화하고 웹 지도에 시각화한다.
- 지역별 위험 특성에 맞는 대응 방향을 제안한다.

## 사용 기술

- HTML5
- CSS3
- JavaScript
- Leaflet.js
- OpenStreetMap
- GitHub Pages

## 파일 구조

```text
vietnam-climate-risk-map/
├── index.html
├── style.css
├── script.js
├── data/
│   └── risk-data.js
└── README.md
```

## 제작 과정

1. 베트남의 기후위험 자료 조사
2. 지역별 위험요소 분류
3. 사람·동물·식물 영향 정리
4. 프로젝트용 위험도 지표 구성
5. JavaScript 데이터 작성
6. Leaflet 지도 구현
7. 지역별 인터랙션 및 필터 구현
8. GitHub Pages로 웹 배포

## 위험도 해석

본 사이트의 1~5점 위험도는 **교육 목적의 비교·시각화를 위한 프로젝트용 지표**입니다. 공식 재난 예측값이나 실제 대피 판단의 근거가 아닙니다.

## 데이터 참고 방향

- IPCC
- World Bank Climate Change Knowledge Portal
- NASA Earth Observatory
- 베트남 정부 및 기후·환경 관련 공개자료
- OpenStreetMap

실제 학교 제출용으로 발전시킬 경우 각 지역의 수치와 설명을 최신 공식 통계 및 논문으로 다시 검증하고, `data/risk-data.js`의 값을 출처와 함께 수정하는 것을 권장합니다.

## GitHub Pages 배포

1. GitHub에서 새 Repository를 만든다.
2. 이 프로젝트의 파일을 모두 업로드한다.
3. `Settings → Pages`로 이동한다.
4. Source를 `Deploy from a branch`로 설정한다.
5. Branch를 `main`, Folder를 `/ (root)`로 선택한다.
6. 저장 후 GitHub Pages 주소에서 웹사이트를 확인한다.
