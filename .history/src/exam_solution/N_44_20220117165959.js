//1. split으로 쪼개고, for을 통해서 각각 더한다.
//2. 18234를 계속 10으로 나누고 몫을 정리해서 더해주면 가능

let input = '18234';
let sum = 0;

while (input) {
  //10으로나누 몫을 sum에 저장
  sum = sum + (input % 10);
  input = Math.floor(input / 10);
}

console.log(sum);
