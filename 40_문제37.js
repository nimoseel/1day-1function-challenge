// 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하세요.
const array = prompt('이름을 입력해주세요.').split(' ');
let result = {};
let winner = "";

for(let index in array){
    let val = array[index];
    result[val] = result[val] === undefined ? 1 : result[val] = result[val] + 1;
}

winner = Object.keys(result).reduce(function(a, b){
    return result[a] > result[b] ? a : b
});

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);