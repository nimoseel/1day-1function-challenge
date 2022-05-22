function isLeapYear(year){
    return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)
}

console.log(isLeapYear(2020))
console.log(isLeapYear(2010))
console.log(isLeapYear(2000))


// 기본 매개변수를 추가한 윤년 함수
function isLeapYear1(year=new Date().getFullYear()){
    console.log(`매개변수 year: ${year}`)
    return (year % 4 === 0 ) && (year % 100 !== 0) || (year % 400 === 0)
}

console.log(isLeapYear1(2020))
