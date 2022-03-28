// 0 1 1 2 3
// 메모리효율로 보았을 때, 재귀로 하지말아야함 => 메모라이제이션, 동적탐색으로 극복
let fs = require('fs');
let filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

console.log(input);

// let n = 22;
// const f = [
//   [1, 0],
//   [0, 1],
// ];

// for (let i = 2; i <= n; i++) {

// 	f[i] = [
// 	f[i - 2][0] + f[i - 1][0], 0
//   	f[i - 2][1] + f[i - 1][1]];
// //

// console.log(f[n]);
