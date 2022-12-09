// 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return

function solution(array, n) {
    const minDiff = Math.min(...array.map(a => Math.abs(a - n)));
    const answer = array.sort().find(a => Math.abs(a - n) === minDiff)
    return answer;
}
