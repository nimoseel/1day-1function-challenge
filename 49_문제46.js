// 1부터 20까지 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요.
let arr = [];
let total = 0;

for(let i = 0 ; i < 20; i++){
    arr[i] = i+1;
}

// 각원소에 대해 특정한 함수 사용하고 싶다면 forEach문 사용
arr.forEach((n)=>{
    while(n){
        total = total + n%10;
        n = Math.floor(n/10);
    }
})