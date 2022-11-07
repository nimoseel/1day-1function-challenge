function Sausage(el1, el2){
    this.inside1 = el1;
    this.inside2 = el2;
};

Sausage.prototype.taste = function(){
    return this.inside1+ "와 " + this.inside2 + "맛이 난다 !";
}

let mySausage = new Sausage("돼지고기", "마늘");

// function FireSausage(el1, el2, el3){
//     this.inside1 = el1;
//     this.inside2 = el2;
//     this.inside3 = el3;
// }

// FireSausage.prototype.taste = function(){
//     return this.inside1+ "와 " + this.inside2 + "맛이 난다 !";
// }

// FireSausage.prototype.flavor = function(){
//     return this.inside3 + " 풍미도 있다";
// }

// let newSausage = new FireSausage("돼지고기","마늘","불맛");
// console.log(newSausage.taste());
// console.log(newSausage.flavor());

//프로퍼티와 프로토타입 함수(taste)가 중복되고 있음 ! .. flavor만 추가되었을 뿐
// 중복을 제거해보자


// 1. 프로퍼티 가져다 쓰기 // 생성자 훔치기
function FireSausage(el1,el2,el3){
    Sausage.call(this, el1, el2); 
    // Sausage는 생성자, 생성자는 함수, 함수이기 때문에 call 메서드 사용 가능
    // call 메서드를 사용하면 앞에 있는 함수가 실행될 때 바라볼 this값을 결정
    // Sausage.call의 this는 FireSausage의 인스턴스를 가르킴 ! 
    this.inside3 = el3;
}

// 2. 프로토타입 상속 받기 
FireSausage.prototype = Object.create(Sausage.prototype);
    // Object.create() 메소드를 통해 [[Prototype]]이 참조할 생성자의 prototype 프로퍼티를 설정
    // FireSausage.prototype이 바라볼 방향은 Sausage.prototype! 
    // 현재 Sausage 프로토타입은 taste 함수가 있음 ! -> 이제 FireSausage도 taste 사용할 수 있음 
FireSausage.prototype.constructor = FireSausage;
    // FireSausage의 prototype의 constructor을 다시 설정해주고 있음
    // 설정해주지 않는다면 프로토타입안에 constructor 프로퍼티가 없음

FireSausage.prototype.flavor = function(){
    return this.inside3 + " 풍미도 있다! ";
}

let myNewSausage = new FireSausage("돼지고기","마늘","불맛");
console.log(myNewSausage.taste()); // 돼지고기와 마늘맛이 난다 !
console.log(myNewSausage.flavor()); // 불맛 풍미도 있다! 

// 상속 받고자 하는 상위 타입의 프로퍼티와 메소드가 많을수록 상속은 매우 유용함
// call 이나 apply를 이용하여 인스턴스를 인수로 전달하고 프로퍼티를 상속받는 방법을 생성자 훔치기라고 함
// 이렇게 프로퍼티를 상속 받는 타입을 하위타입(subtype), 상속 해주는 타입을 상위타입(supertype)이라고 함