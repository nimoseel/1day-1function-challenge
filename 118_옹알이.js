// 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다. 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return



function solution(babbling) {
    let answer = 0;
    
    for(let i of babbling){
        if (/(aya|ye|woo|ma)\1+/g.test(i)) continue;
        if(/^(aya|ye|woo|ma)+$/g.test(i)){
            answer++;
        }
    }
    return answer;
}