function solution(board) {
    let answer = 0;

    // 위험지역 좌표 (현재 좌표 기준으로 위아래대각 계산할 것)
    let danger = [
        [0, 1],
        [0, -1],
        [1, 0],
        [1, 1],
        [1, -1],
        [-1, 0],
        [-1, 1],
        [-1, -1]
    ] ;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1) { // 지뢰있다면
                danger.forEach((item) => {
                    let [dangerX, dangerY] = item ; // 구조분해할당
                    [dangerX, dangerY] = [i + dangerX, j + dangerY] ; // 위험지역 구하기

                    if (
                        dangerX >= 0 &&
                        dangerX < board.length &&
                        dangerY >= 0 &&
                        dangerY < board[i].length && board[dangerX][dangerY] === 0
                    ){
                        board[dangerX][dangerY] = 2; // 위험지역은 2 
                    }
                });
            }
        }
    }
    board.forEach(a => a.forEach( b => b === 0 ? answer++ : 0)) ; // 값이 0이면(안전지대라면) answer ++;

    return answer ;
}