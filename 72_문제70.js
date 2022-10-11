// 행렬 2개가 주어졌을 때 곱할 수 있는 행렬인지 확인하고 곱할 수 있다면 그 결과를 출력하고,
// 곱할 수 없다면 -1을 출력하는 프로그램을 만들어주세요.
// 첫번째 행렬의 열의 개수과 두번째 행렬의 행의 개수가 다르면 곱셈이 불가능함

let a = [
    [1,2],
    [3,4]
];

let b = [
    [5,6],
    [7,8]
];

// let result = 
// [
//     [
//         a[0][0]*b[0][0] + a[0][1]*b[1][0], a[0][0]*b[0][1] + a[0][1]*b[1][1]
//     ],
//     [
//         a[1][0]*b[0][0] + a[1][1]*b[1][0], a[1][0]*b[0][1] + a[1][1]*b[1][1]
//     ]
// ]

function solution(a,b){
    const len = a.length;

    if(a[0].length === b.length){
        // 3번의 for문
        let result =[];
        for(let i=0; i<len; i++){
            let row = [];
            for(let j=0; j<len; j++){
                let el = 0;
                for(let k=0; k<len; k++){
                    el += a[i][k]*b[k][j];
                }
                row.push(el);
            }
            result.push(row);
        }
        return result;
    }else{
        return -1;
    }
}

console.log(solution(a,b));