const n = prompt().split(' ');

n.sort();

function solution(n){
    for(let i = 0; i < n.length-1; i++){
        if(Number(n[i]) +1 !== Number(n[i+1])){
            return "No"
        }
    }
    return "Yes"
}

console.log(solution(n));