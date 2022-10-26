// 어떤 수 num에서 len개의 수를 선택하여 만들 수 있는 수 중에서 가장 큰 수를 찾아 주세요.

function solution(chars, length){
    let result = [];

    const f = (pre, chars) => {
        for(let i =0; i<chars.length; i++){
            result.push(pre + chars[i]);

            f(pre + chars[i], chars.slice(i+1));
        }
    }

    f('', chars);

    result = result.filter(x => x.length === length);

    result.sort((a,b)=>{return b-a});

    return result[0];
}

const num = prompt('숫자를 입력하세요').split('');
const len = parseInt(prompt('몇 개의 수를 선택하시겠습니까'),10);
console.log(solution(num,len));