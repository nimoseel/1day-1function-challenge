//음이 아닌 정수를 9로 나눈 나머지는 그 정수의 각 자리 숫자의 합을 9로 나눈 나머지와 같음.
//음이 아닌 정수가 문자열 number로 주어질 때, 이 정수를 9로 나눈 나머지를 return 하는 함수 만들기

// 내 풀이
function solution(number) {
    let arr = number.split('').map(Number);
    return arr.reduce((acc,cur)=> acc+cur)%9;
}

