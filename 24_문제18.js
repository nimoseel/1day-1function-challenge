const score = prompt().split(" ");
// 입력을 받으면 공백으로 구분해서 배열을 만듦
let sum = 0;

for (let i=0; i<score.length; i++){
    // score가 string이기 때문에 parseInt 사용하여 정수로 만들기 
    sum = sum + parseInt(score[i], 10);
}

// 소수점 자리는 모두 없앤다 
// Math.floor 주어진 값보다 이하의 가장 큰 정수를 반환
console.log(Math.floor(sum/score.length));