// 놀이기구 제한무게를 넘으면 다음 기구를 타야합니다.
// 원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.
// 첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다. 
// 그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.

const weightLimit = prompt("무게제한을 입력해주세요");
const memberCount = prompt("인원수를 입력해주세요");
let count = 0;
let totalWeight = 0;

for (let i = 0; i< memberCount; i++){
    totalWeight = totalWeight + parseInt(prompt("몸무게를 입력해주세요"),10);
    if(totalWeight <= weightLimit){
        count++;
    }
}

console.log(count)