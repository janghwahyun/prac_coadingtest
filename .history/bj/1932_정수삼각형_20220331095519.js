let fs = require('fs');
let filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [n, ...arr] = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');
const N = +n;
let dp = arr.map(v => v.split(' ').map(v => +v));

console.log(dp);

// 일반화
sum(i, j) = node(i, j) + max(node(i - 1, j - 1), node(i - 1, j));
