// getTime을 이용하여 현재연도를 출력해보세요.
const theDate = new Date();
// 1년이 몇 ms인지 
console.log(Math.floor(theDate.getTime()/(60*60*24*365*1000))+1970);