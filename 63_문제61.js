// 문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.
const user_s = 'aaabbbcccdddd';
let result_s = '';
let store_s = user_s[0];
let count = 0;

for(let i of user_s){
    console.log(i);
    if (i == store_s){
        count += 1;
    } else {
        result_s += store_s + String(count);
        store_s = i;
        count = 1;
    }
}
result_s += store_s + String(count);
console.log(result_s)