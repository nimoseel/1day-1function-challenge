// 어떤 입력이 주어지면 앞 글자만 줄여 출력하도록 해주세요.
const input = prompt('입력해주세요').split(' ');

let result = '';

for(let s of input){
    result += s.slice(0, 1);
}

console.log(result);