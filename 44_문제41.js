// 숫자가 소수인지 아닌지 판별하는 프로그램을 작성해주세요
// 1보다는 크고 자기 자신보다는 작은 수를 계속 나눠보기
const prime = 11;

function primeFunc(n){
    for(let i = 2; i < n; i++){
        if(n % 1 === 0){
            console.log("no");
            return false;
        }
    }
    if(n === 1){
        console.log("no");
        return false;
    }
    console.log("yes");
}

primeFunc(prime)