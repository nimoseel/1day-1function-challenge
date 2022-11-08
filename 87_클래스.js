// 내부적인 동작은 동일하지만 더 보기 좋고 편리하게 개선된 문법 Class ! 
// 클래스 상속
class Sausage{
    constructor(el1, el2){
        this.inside1 = el1;
        this.inside2 = el2;
    }
    taste(){
        return this.inside1 +"와 "+ this.inside2 +"맛이 난다!";
    }
}

let newSausage = new Sausage("닭고기","양파");
console.log(newSausage.taste());

// Sausage 클래스를 상속받는 FireSausage 클래스
// extends 키워드를 사용해 상위타입 프로퍼티를 상속받음
class FireSausage extends Sausage { 
    // Sausage의 자식 클래스 
    // 자식 클래스에 constructor 함수 선언하면 부모 클래스의 constructor 함수를 덮어 씀 
    // 이를 해결하기 위해 super 메소드가 필요 (부모 클래스의 생성자를 호출하는 메소드)
    constructor(el1, el2, el3){
        super(el1,el2);
        this.inside3 = el3;
    }
    flavor(){
        return this.inside3 + "의 풍미도 난다!"
    }
}

let newFireSausage = new FireSausage("냠냠","욤욤","불맛")
console.log(newFireSausage.flavor());