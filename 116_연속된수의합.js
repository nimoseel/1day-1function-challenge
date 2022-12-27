//연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return

function solution(num, total) {
    let min = Math.ceil(total/num)-Math.floor(num/2);
    return Array.from({length: num}, (_, i) => i + min);
}