function mathBrackets(arr){
    let count = 0 

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '('){
            count++;
        }
        if(arr[i] === ')'){
            count--;
        }
    }
    if(count !== 0){
        // (,) 개수가 맞으면 0이 나오기 때문에
        return false;
    }

    let bracket = [];
    for (let i in arr){
        if(arr[i] === '('){
            bracket.push('(')
        }
        if(arr[i] === ')'){
            if(bracket.length === 0){
                return false;
            }
            bracket.pop();
        }
    }
    return true;
}

const n = prompt().split('');

if (mathBrackets(n) === true){
    console.log('Yes');
} else {
    console.log('No');
}