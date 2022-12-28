// 점 네 개의 좌표를 담은 이차원 배열  dots
// [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
// 주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return

//[[1, 4], [9, 2], [3, 8], [11, 6]]	    // 1
//[[3, 5], [4, 1], [2, 4], [5, 10]]	    // 0

function solution(dots) {
    const arr = [] ;
    
    for(let i = 0 ; i < 4 ; i ++) {
        for(let j = i+1 ; j < 4 ; j ++) {
            const curve = (dots[i][1]-dots[j][1]) / (dots[i][0]-dots[j][0]) ; // 기울기 값
            if(arr.includes(curve)){   
                return 1 ; // 배열에 기울기값 있다면 1리턴
            }else{
                arr.push(curve); // 배열에 기울기값 없다면 푸쉬
            }
        }
    }
    return 0 ;
}