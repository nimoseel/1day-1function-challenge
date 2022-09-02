const planets = [
    "수성",
    "금성",
    "지구",
    "화성",
    "목성",
    "토성",
    "천왕성",
    "해왕성"
];

// 입력을 받는 변수 선언
const n = prompt("몇번째 행성을 원하나요?");

console.log(planets[n-1]);