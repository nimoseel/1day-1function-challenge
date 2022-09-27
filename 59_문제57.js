// 0부터 1000까지 1의 개수를 세는 프로그램
// 0부터 1000까지의 수에서 1은 몇 번이나 들어갔을까요? 출력해 주세요.

// for of 사용
let s = '';
for(let i = 0; i<=1000; i++){
    s+=1;
}
let count = 0;
for(let j of s){
    if(j == 1){
        count++;
    }
}
console.log(count);

// 고전적인 방법
const obj = {};

for (let i = 0; i <= 1000; i++) {
    let tmp = i;
    while (tmp > 0) {
        let num = tmp % 10;
        if (obj[num]) {
            obj[num]++;
        } else {
            obj[num] = 1;
        }
        tmp = parseInt(tmp/10, 10);
    }
}

console.log(obj[1]);