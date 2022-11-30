function solution(my_string) {
    return my_string.replace(/[aeiou]/g,'')
    // 정규 표현식 뒤의 "g"는 전체 문자열을 탐색해서 모든 일치를 반환하도록 지정하는 전역 탐색 플래그
}