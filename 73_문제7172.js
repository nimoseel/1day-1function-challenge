const graph = {
    'E': ['D', 'A'],
    'F': ['D'],
    'A': ['E', 'C', 'B'],
    'B': ['A'],
    'C': ['A'],
    'D': ['E','F']
};

// 깊이 우선 탐색
function dfs(graph, start){
    let visited = [];
    let stack = [start]; // 깊이우선탐색은 stack으로
    
    while(stack.length != 0){ // stack에서 값이 다 빠진 상태에서만 종료됨.
        let n = stack.pop();
        if(!visited.includes(n)){
            visited.push(n); // 스택에서 맨 마지막것을 꺼내 visited에 등록
            let sub = graph[n].filter(x=>!visited.includes(x));
            for(let i of sub){
                stack.push(i);
            }
        }
    }
    return visited;
}

console.log(dfs(graph,'E'));


//너비 우선 탐색
function bfs(graph, start){
    let visited = [];
    let queue = [start];

    while(queue.length != 0){ // queue에서 값이 다 빠진 상태에서만 종료됨.
        let n = queue.shift(); 
        if(!visited.includes(n)){
            visited.push(n); // 큐에서 맨 앞에 것을 꺼내서 visited에 등록
            let sub = graph[n].filter(x=>!visited.includes(x));
            for(let i of sub){
                queue.push(i);
            }
        }
    }
    return visited;
}

console.log(bfs(graph,'E'));