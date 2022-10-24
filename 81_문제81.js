// 지뢰를 찾는 문제입니다. 깃발 주위에는 지뢰가 사방으로 있습니다. 깃발의 위치를 입력받아 지뢰와 함께 출력 해주는 프로그램을 만드세요.

// 데이터
// let flag = []; //지뢰 없이 깃발만 있는 리스트
// let minesweeper = []; //지뢰를 찾은 리스트
// let count = 0;

// console.log(flag);
// console.log(minesweeper);

let value = "0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0";
let sp = value.split("\n");
console.log(sp);

let count = 0;

for(let i of sp){
    sp[count] = i.replace('1', 'f').split(' ');
    count += 1;
}

count = 0;
let search = 0;

for (let s of sp){
    for (let i of s){
        if (i === 'f'){
            search = s.indexOf(i);
            if (search > 0){
                s[search-1] = '*';
            }
            if (search < 4){
                s[search+1] = '*';
            }
            if (count > 0){
                sp[count-1][search] = '*';
            }
            if (count < 4){
                sp[count+1][search] = '*';
            }
        }
    }
    count += 1;
}

for (let i of sp){
    console.log(i);
}