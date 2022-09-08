// 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.
const array = prompt().split(" ").reverse()
let reverseVal = "";

for(let i = 0 ; i < array.length; i++){
    reverseVal = reverseVal + (array[i]+" ")
}

console.log(reverseVal)