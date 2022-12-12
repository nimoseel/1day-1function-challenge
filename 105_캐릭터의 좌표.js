//up, down, left, right 방향키가 있으며 각 키를 누르면 위, 아래, 왼쪽, 오른쪽으로 한 칸씩 이동 
//입력한 방향키의 배열 keyinput와 맵의 크기 board이 매개변수로 주어집니다. 
//캐릭터는 항상 [0,0]에서 시작, 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]를 return

//[0, 0]은 board의 정 중앙에 위치. board의 가로 크기가 9라면 캐릭터는 왼쪽으로 최대 [-4, 0]까지 오른쪽으로 최대 [4, 0]까지 이동 가능.

function solution(keyinput, board) {
    let res = [0,0]; 
    
    for (let p of keyinput) {
        switch(p){
            case 'left': if (-res[0] < board[0]/2-1) res[0]--; break;
            case 'right': if (res[0] < board[0]/2-1) res[0]++; break;
            case 'up': if (res[1] < board[1]/2-1) res[1]++; break;
            case 'down': if (-res[1] < board[1]/2-1) res[1]--; break;
        }
    }
    return res;
}