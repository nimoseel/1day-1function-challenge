//num_list의 첫 번째 원소부터 마지막 원소까지 n개 간격으로 저장되어있는 원소들을 차례로 담은 리스트를 return하는 함수 만들기

let num_list = [4, 2, 6, 1, 7, 6]	

function solution(num_list, n) {
    let arr = [];
    num_list.map((v,i) => i%n === 0 && arr.push(v))
    return arr
}

function solution2(num_list, n) {
    return num_list.filter((_, i) => i % n === 0);
}

solution(num_list, 2)
// [4, 6, 7]

solution2(num_list, 4)
// [4, 7]
