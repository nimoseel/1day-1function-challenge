// 순회하는 리스트
const l = [10, 20, 25, 27, 34, 35, 39]; //기존 입력 값
const turn = prompt('순회 횟수는?');

function rotate(a, t){
    let b = a.slice();
    let c = [];

    // 순회후 리스트
    for(let i = 0; i < t; i++){
        b.unshift(b.pop());
    }

    // c 배열 : 리스트의 차 
    for(let i in a){
        c.push(Math.abs(a[i]-b[i]));
    }

    // 최솟값
    const m = Math.min.apply(null,c);
    // 최솟값의 인덱스
    let index = c.indexOf(m);

    console.log("index : ",index);
    console.log("value : ", a[index],b[index]);
}

rotate(l, turn);