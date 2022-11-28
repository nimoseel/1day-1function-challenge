// 첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1, 두 번째 분수의 분자와 분모를 뜻하는 denum2, num2
// 두 분수를 더한 값을 기약 분수로 나타냈을 때 return = [분자, 분모] 
// 최대공약수 => 유클리드 호제법 사용

function solution(denum1, num1, denum2, num2) {
    let num = num1 * num2;
    let denum = (denum1 * num2) + (denum2 * num1) ;
    
    const getGcd = (a, b) => (a % b === 0 ? b : getGcd(b, a % b));
    // 큰 수를 작은 수로 나눈 나머지가 0이면 작은 수가 최대공약수
    // 나머지가 0이 아니라면 작은 수를 다시 나머지로 나눔
    // 나머지가 0이 될 때의 수가 최대공약수
    const gcd = getGcd(denum, num);

    return [denum/gcd, num/gcd];
}