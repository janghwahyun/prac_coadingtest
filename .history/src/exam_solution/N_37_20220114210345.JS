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
const array = [3, -1, 10, 5, 0];

const sum = array.reduce(function (accumulator, currentValue) {
  console.log(accumulator);
  console.log(currentValue);
  return accumulator + currentValue;
});
console.log(sum); // 17
// 더 간단하게
const sum1 = array.reduce((acc, value) => acc + value);
console.log(sum1);

//array안에 오브젝트 있는경우
var array2 = [
  { name: 'james', age: 34 },
  { name: 'tom', age: 41 },
  { name: 'terry', age: 14 },
  { name: 'neymar', age: 21 },
  { name: 'depay', age: 24 },
];

const sum3 = array2.reduce((acc, value) => acc + value.age, 0);
console.log(sum3);
