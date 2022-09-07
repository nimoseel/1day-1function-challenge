// 2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다. 
// 입력으로 문자열이 주어지면 2-gram으로 출력하는 프로그램을 작성해 주세요.

const word = prompt();

for(let i=0; i<word.length; i++){
    console.log(word[i], word[i+1])
}