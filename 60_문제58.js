//숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.
const n = prompt('숫자를 입력하세요');
parseInt(n,10);

console.log(n.toLocaleString());

//재귀함수 사용
function comma(s){
    if(s.length <= 3){
        return s;
    }else{
        return comma(s.slice(0, s.length-3))+ ',' +s.slice(s.length-3);
    }
}
const num = prompt('숫자를 입력하세요');
console.log(comma(num));
