function min(array){
    let output = array[0]
    for (item of array){
        if(output>item){
            output = item
        }
    }
    return output
}

testArray = [21, 34, 5, 66, 78, 124]
console.log(min(testArray))



// 배열에 있는 요소들을 하나씩 보기 때문에 for of 사용
// 최솟값이 맞는지 아닌지 확인할 output 변수 선언
// 만약 현재 아웃풋보다 아이템이 작으면 아웃풋을 아이템으로 바꿔라.
// 최댓값은  if 조건문 부등호 방향만 바꾸면 됌. 
