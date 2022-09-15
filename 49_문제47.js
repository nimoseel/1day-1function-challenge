// 아래 데이터들로부터 중복을 제거하여 실제 접수 인원을 출력해주세요.
const people = {
    이호준: "01050442903",
    이호상: "01051442904",
    이준호: "01050342904",
    이호준: "01050442903",
    이준: "01050412904",
    이호: "01050443904",
    이호준: "01050442903"
};

// people 변수에 있는 프로퍼티들을 set 객체에 저장하기
let result = new Set();
for(let key in people){
    result.add(people[key]);
}
console.log(result.size)
// set 객체에서 중복된 데이터를 제거함.
