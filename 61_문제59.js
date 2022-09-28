const s = prompt();

const n = 25+parseInt((s.length/2),10)

//왼쪽 채우기
const left = s.padStart(n,'=')
console.log(left);
console.log(left.length);
// padStart 
// 앞에 길이가 주어지고 뒤에 채울 문자열을 주어짐- 주어진 길이만큼 주어진 문자열 채워줌

//오른쪽 채우기
const right = left.padEnd(50,'=');
console.log(right);
console.log(right.length);