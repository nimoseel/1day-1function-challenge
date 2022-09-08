// 민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자.
const unsorted = prompt();
let sorted = "";

sorted = unsorted.split(" ").sort(function(a,b){return a-b}).join(" ")

if(unsorted === sorted){
    console.log("yes")
}else{
    console.log("no")
}