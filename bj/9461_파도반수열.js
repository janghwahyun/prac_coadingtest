let fs = require('fs');
let filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let [a, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(num => parseInt(num));

input.shift();
console.log(input);

const dp = [1, 1, 1, 2, 2];
const max = Math.max(...input);

for (let i = 5; i < max; i++) {
  dp[i] = dp[i - 1] + dp[i - 5];
  dp.push(dp[i]);
}

console.log(dp[N - 1]);
