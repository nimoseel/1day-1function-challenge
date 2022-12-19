// 선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.

// lines [[0, 1], [2, 5], [3, 9]]	// result 2
// lines [[-1, 1], [1, 3], [3, 9]]	// result 0
// lines [[0, 5], [3, 9], [1, 10]]	// result 8

function solution(lines) {
    let line = new Array(200).fill(0);

    lines.forEach(([a, b]) => {
        for(a; a<b; a++){
            line[a+100]++;
        }
    });
    
    return line.reduce((a, c) =>  c > 1 ? a + 1 : a, 0);
}