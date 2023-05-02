// 정수 리스트 num_list가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return하는 함수 만들기. 음수가 없다면 -1을 return.

let a = [12, 4, 15, 46, 38, -2, 15]	
let b = [13, 22, 53, 24, 15, 6]	

function solution(num_list) {
    let minus = num_list.find(x => x<0) ;
    return minus ? num_list.indexOf(minus) : -1 ;
}
// findIndex 사용할 생각을 못한 내 풀이

// findIndex 사용하자 !
function solution2(num_list) {
    return num_list.findIndex(x => x<0) ;
}

solution(a) // 5
solution2(b) // -1