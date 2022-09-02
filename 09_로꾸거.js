var str = "거꾸로";

// 문자열을 뒤집을 수 있는 함수는 없지만 배열 원소 순서를 뒤집는 reverse함수
// 1. 문자열을 배열로 만들어주기 split
// 2. reverse로 순서 뒤집기
// 3. 배열을 문자열로 만들어주기 join
console.log(str.split("").reverse().join(""));