// 사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요
let num = prompt();
let sum = 0;

while(num){
    sum = sum + num%10;
    num = Math.floor(num/10);
}

console.log(sum);