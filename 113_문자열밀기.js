// 문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다. 이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때, A를 밀어서 B가 될 수 있다면 몇 번 밀어야 하는지 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

function solution(A, B) {
    let arr = [...A];
    
    for(let i=0; i<arr.length; i++){
//         만약 A와 B가 같다면 밀 필요 없으니까 0
        if(A === B){
            return 0;
//         A와 B가 다르다면 하나씩 밀어보자
        }else{
            arr.unshift(arr.pop());
            if(arr.join('') === B){
                return i+1;
            }
        }
    }
    return -1;
}


// 간단한 방법
let solution2=(A,B)=>(B+B).indexOf(A);