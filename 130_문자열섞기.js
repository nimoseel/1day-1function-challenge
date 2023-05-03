//길이가 같은 두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 함수 만들기

function solution(str1, str2) {
    let arr = [];
    for(let i=0; i<str1.length; i++){
        arr.push(str1[i]);
        arr.push(str2[i]);
    }
    return arr.join("");
}

function solution2(str1, str2) {
    return [...str1].map((x, i)=> x+str2[i]).join("");
}

solution("aaaaa","bbbbb") //ababababab