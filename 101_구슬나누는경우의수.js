// balls 갖고 있는 구슬의 개수
// share 친구들에게 나누어 줄 구슬 개수
// balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수 return

function solution(balls, share) {
    function factorial(n){
        return (n > 1) ? BigInt(n) * factorial(n - 1) : BigInt(n);
    }
    
    if(balls === share){
        return 1;
    } else {
        return factorial(balls) / (factorial(balls - share) * factorial(share));
    }
}

// 팩토리얼 사용으로 수가 커짐에 따라 정확한 연산을 위해 BigInt 사용