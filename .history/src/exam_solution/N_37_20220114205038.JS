const name = ['원범', '원범', '혜원', '혜원', '혜원', '혜원', '유진', '유진'];

let result = {};
let winner = '';

for (let i in name) {
  let val = name[i];
  result[val] = result[val] === undefined ? 1 : (result[val] = result[val] + 1);
}
// console.log(result);

winner = Object.keys(result).reduce(function (a, b) {
  console.log(a, b);
  return result[a] > result[b] ? a : b;
});

console.log(winner);
console.log(`${winner}(이) 총 ${result[winner]}표로 반장이 되었다.`);

// reduce() 메소드를 이용한 보충
