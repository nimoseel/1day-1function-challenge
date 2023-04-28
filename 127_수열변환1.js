//arr 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 50보다 작은 홀수라면 2를 곱하는, 그 결과인 정수 배열을 return 하는 함수 만들기

function solution(arr) {
    return arr.map(x => 
        x>=50 && x%2 === 0 ? x/2 : 
        x<50 && x%2 === 1 ? x*2 : x
    )
}