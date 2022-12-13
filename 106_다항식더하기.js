let polynomial = "3x + 7 + x"

function solution(polynomial) {
    let xArr = polynomial.split(" ").filter(v => v.includes('x'));
    let xSum = xArr.reduce((acc,cur)=>acc+parseInt(cur ==="x"? 1 : cur),0);

    let numArr = polynomial.split(" ").filter(v=>!isNaN(v));
    let numSum = numArr.reduce((acc,cur) => acc+parseInt(cur),0);

    if(xSum>0 && numSum>0){
        return [(xSum === 1 ? "x" : xSum+"x"), "+",numSum].join(" ").toString();
    } else if(xSum>0 && numSum===0){
        return (xSum === 1 ? "x" : xSum+"x").toString();
    } else if(xSum===0 && numSum>0){
        return numSum.toString();
    }
}