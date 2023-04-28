//정수 start와 end가 주어질 때, start에서 end까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하는 solution 함수 만들기

// start 10
// end 3
// result [10, 9, 8, 7, 6, 5, 4, 3]

function solution(start, end) {
    let arr = new Array(start-end+1);

    for(let i=0; i<arr.length; i++){
        arr[i] = start - i;
    }
    
    return arr;
}

