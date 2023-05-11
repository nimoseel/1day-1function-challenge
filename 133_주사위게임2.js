// 세 주사위를 굴렸을 때 나온 숫자를 a, b, c 하자.
// 세 숫자가 모두 다르다면 a + b + c 점
// 세 숫자 중 어느 두 숫자는 같고 나머지 다른 숫자는 다르다면 (a + b + c) × (a2 + b2 + c2 )점
// 세 숫자가 모두 같다면 (a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 )점

// 내 풀이 
// Set 객체를 통해 중복값 제거 후 size를 파악하여 풀이했다.

function solution(a, b, c) {
    let arr = new Set([a,b,c]);
    
    if(arr.size === 3){
        return a+b+c;
    }else if(arr.size === 2){
        return (a+b+c)*(a**2+b**2+c**2);
    }else if(arr.size === 1){
        return (a+b+c)*(a**2+b**2+c**2)*(a**3+b**3+c**3);
    }
    
}