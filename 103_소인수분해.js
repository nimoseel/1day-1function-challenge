//자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열 return

function solution(n) {
    let answer = [];
    let prime = 2; // n은 2부터

    while(n >= 2){
        if(n % prime === 0){
            answer.push(prime);
            n = n / prime; // 소수의 배수는 소수가 아니기 때문
        }
        else prime++; // 나눈 나머지가 0이 아닐경우 prime++하여 판별
    }
    return [...new Set(answer)]; // 중복 삭제를 위해 new Set 활용
}