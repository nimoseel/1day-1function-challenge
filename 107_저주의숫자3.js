function solution1(n){
    let xnum = 0;
    for(let i=1; i<=n; i++){
        xnum++;
        while(xnum.toString().includes('3') || xnum % 3 === 0){
            xnum++;
        }
    }
    return xnum;
}

function solution2(n){
    let arr = [];
    let xnum = 0;

    // 일대일대응이니 arr.length == n 이어야함.
    while(arr.length !== n && ++xnum){
        if(xnum%3 !== 0 && !(''+xnum).includes('3')){
            // (''+num)으로 string 만들어줌
            arr.push(xnum);
        }
    }
    
    // 배열 마지막 값 리턴
    return arr.pop();
}