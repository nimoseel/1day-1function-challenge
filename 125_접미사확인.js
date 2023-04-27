// 문자열 my_string과 is_suffix가 주어질 때, is_suffix가 my_string의 접미사라면 1을, 아니면 0을 return 하는 함수 만들기

function solution(my_string, is_suffix) {
    let splice_start = my_string.length - is_suffix.length;
    let suffix = [...my_string].splice(splice_start, my_string.length).join('');
    return suffix === is_suffix ? 1 : 0;
}

function solution2(my_string, is_suffix){
    return my_string.endsWith(is_suffix) ? 1 : 0;
}
// endsWith()
// 어떤 문자열에서 특정 문자열로 끝나는지를 확인할 수 있으며, 그 결과를 true 혹은 false로 반환.