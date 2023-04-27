// 문자열 myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고, "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return하는 함수 만들기

function solution(myString) {
    return myString.toLowerCase().replaceAll("a", "A");
}