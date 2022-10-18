// 가장 긴 공통 부분 문자열
function sol(string){
    let result = [];
    for(let i = 0 ; i < string.length+1 ;  i++){
        for (let j = 0 ; j < i ; j++){
            result.push(string.slice(j,j+string.length+1 -i));
        }
    }
    return result;
}

let inputOne = prompt('첫번째 문자열');
let inputTwo = prompt('두번째 문자열');
let arrayOne = sol(inputOne);
let arrayTwo = sol(inputTwo);

// 공통 부분 문자열 찾기 
let inter = arrayOne.filter(x=>arrayTwo.includes(x));
console.log(inter);

// 문자열 길이로 내림차순 정렬
inter.sort((a,b) => {
    return b.length-a.length;
});

console.log(inter[0].length);