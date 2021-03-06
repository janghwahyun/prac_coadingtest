// input = [
//   [26, 40, 83],

//   [49, 60, 57],

//   [13, 89, 99],
// ];

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
const N = parseInt(input[0]);
console.log(N);

input.shift();
input = input.map(value => value.split(' ').map(element => Number(element)));

// 첫번째집을 R로 칠한 경우 / 첫번째 집을 G로 칠한 경우 / 첫번째 집을 B로 칠한 경우를 모두 다 따져주면 된다.
// 2번째 집부터
for (let i = 1; i < N; i++) {
  input[i][0] = Math.min(input[i - 1][1], input[i - 1][2]) + input[i][0];
  input[i][1] = Math.min(input[i - 1][0], input[i - 1][2]) + input[i][1];
  input[i][2] = Math.min(input[i - 1][0], input[i - 1][1]) + input[i][2];
}

// 시간 복잡도 O(N)
console.log(Math.min(...input[N - 1]));
