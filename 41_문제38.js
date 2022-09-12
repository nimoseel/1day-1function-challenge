//학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.
const scores = prompt().split(" ")

scores.sort(function(a,b){
    return a-b;
});

let top3 = [];
let count = 0;

while (top3.length <4){
    let value = scores.pop();
    if(!top3.includes(value)){
        top3.push(value);
    }
    count++;
}

console.log(top3);
console.log(count-1);