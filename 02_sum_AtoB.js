function sumAll(a,b){
    let output = 0
    for (let i=a ; i<=b ; i++){
        output += i
    }
    return output
}

console.log(sumAll(1,10))
console.log(sumAll(1,100))