// 최댓값 구하기
let result = "10 9 8 7 6 5 4 3 2 1";
result = result.split(" ").map((n)=>{
    return parseInt(n,10);
});

result.sort(function(a,b){
    return b-a;
})

console.log(result[0]);