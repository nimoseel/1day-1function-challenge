let arr = [1, [2, 3, [4, 5]]];
// 중첩 배열 arr 뒤집기 
// 원하는 결과값 [[[5, 4], 3, 2], 1]

function reverseMultiDimensionalArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])){
            result.push(reverseMultiDimensionalArray(arr[i]));
        }else{
            result.push(arr[i]);
        }
    }
    return result.reverse();
}

let reverseArr = reverseMultiDimensionalArray(arr);

console.log(reverseArr); // [[[5, 4], 3, 2], 1]