// 치킨 한 마리당 쿠폰을 한 장 발급합니다. 쿠폰을 열 장 -> 치킨 한 마리 서비스 & 서비스 치킨에도 쿠폰 발급. 
// 시켜먹은 치킨의 수 chicken이 매개변수로 주어질 때 받을 수 있는 최대 서비스 치킨의 수를 return

// chicken 1081 
// result 120


function solution(chicken) {
    function result (coupon){
        if(coupon >= 10){
            const service = Math.floor(coupon/10);
            return service + result(service + (coupon%10));   
        }else{
            return 0;
        }
    }
    return result(chicken)
}