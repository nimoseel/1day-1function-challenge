// 알파벳 소문자 문자열 myString
// 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 return

// 내 풀이
function solution(myString) {
    return myString.replace(/[a-k]/g,'l');
}