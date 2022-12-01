// 가위는 2 바위는 0 보는 5로 표현
// rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열 return

function solution(rsp) {
    let arr = {
        2: 0,
        0: 5,
        5: 2,
    };

    let answer = [...rsp].map((v) => arr[v]).join("");
    return answer;
}


// function solution(rsp) {
//     var answer = [];
//     for(let i in rsp){
//         if(rsp[i] == 2){
//             answer.push('0')
//         }else if(rsp[i] == 0){
//             answer.push('5')
//         }else if(rsp[i] == 5){
//             answer.push('2')
//         }
//     }
//     return answer.join('');
// }