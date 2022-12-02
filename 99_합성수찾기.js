// 약수의 개수가 세 개 이상인 수 - 합성수
// 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수 return

function solution(n) {
    let answer = new Set();
    
    for(let i=1; i<=n; i++){
        for(let j=2; j<i; j++){
            // 1, n을 제외한 j값으로 나눈 나머지가 0일 경우 합성수라고 볼 수 있음
            if(i % j === 0){
                answer.add(i);
            }
        }
    }
    return answer.size;
}