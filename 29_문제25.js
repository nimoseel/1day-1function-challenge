// 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수
const r = prompt('반지름 길이를 입력해주세요');

function circle(n){
    return n*n*3.14
}

console.log(circle(r))