// 아이디와 비밀번호가 모두 일치하는 회원정보가 있으면 "login"을 return합니다.
// 로그인이 실패했을 때 아이디가 일치하는 회원이 없다면 “fail”를, 
// 아이디는 일치하지만 비밀번호가 일치하는 회원이 없다면 “wrong pw”를 return 합니다.

// id_pw
// ["programmer01", "15789"]

// db
// [["programmer02", "111111"], ["programmer00", "134"], ["programmer01", "1145"]]

function solution(id_pw, db) {
    const [id, pw] = id_pw;
    if (!db.find(([a]) => a === id)) return 'fail';
    return db.find(([a, b]) => a === id && b === pw) ? 'login' : 'wrong pw';
}