// 문자열(my_string) 넣으면 k번 반복한 문자열을 return 하는 함수 만들기 
// solution('love', 6)
// lovelovelovelovelovelove

function solution1(my_string, k){
    return my_string.repeat(k);
}

function solution2(my_string, k){
    let answer = '';
    for(let i = 0; i<k; i++){
        answer += my_string;
    }
    return answer;
}