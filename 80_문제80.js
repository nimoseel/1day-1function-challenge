// 조합이란 원소들을 조합하여 만들 수 있는 경우의 수이며 원소의 순서는 신경 쓰지 않습니다.
// 순열이란 원소의 값이 같더라도 순서가 다르면 서로 다른 원소로 취급하는 선택법입니다.

// 한글의 자모 24자 중 자음은 총 14개입니다.
// 이 중 입력받은 자음을 n 개를 선택하여 나올 수 있는 모든 조합과, 조합의 수를 출력하고 싶습니다.

// <--요구 조건-->
// 1. 첫 번째 입력으로 선택할 한글 자음이 주어집니다.
// 2. 두 번째 입력으로 조합의 수가 주어집니다.
// 3. 주어진 조합의 수에 따라 조합과 조합의 수를 출력해 주세요.

function combination(charsArr){
    let combi = [];

    const f = (pre, charsArr) => {
        for (let i = 0; i<charsArr.length; i++){
            combi.push(pre + charsArr[i]);

            f(pre+charsArr[i], charsArr.slice(i+1));
        }
    }
    // 앞 문자열 하나와 어레이 전체를 재귀함수로 만든다..
    f('',charsArr);
    console.log(combi);
    
    // 조합의 수에 맞는 것만 추출
    const result = combi.filter( x => x.length === n);
    console.log(result);
    return result.length;
}

const arr = prompt('입력해주세요').split(',');
const n = parseInt(prompt('조합의 수를 입력해주세요'), 10);

console.log(combination(arr));