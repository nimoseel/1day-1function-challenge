//알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다. spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return해주세요.

function solution(spell, dic){
    return dic.filter(v=> spell.every(i=> v.includes(i))).length ? 1 : 2;
}