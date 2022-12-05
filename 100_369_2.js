// 숫자 order가 매개변수로 주어질 때, 쳐야할 박수 횟수를 return

function solution(order) {
    return Array.from(order.toString()).filter(t => ['3', '6', '9'].includes(t)).length;
}

function solution2(order) {
    let answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
    return answer;
}