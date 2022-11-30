function solution(array) {
    let m = new Map();
    for (let n of array){
        m.set(n, (m.get(n) || 0)+1);
        // set(key, value _ Map개체에 추가할 요소의 값)
        // get(key); 지정된 요소 반환
    }
    m = [...m].sort((a,b)=>b[1]-a[1]);
    return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}