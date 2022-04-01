let fs = require('fs');
let filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let [a, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(num => parseInt(num));

let result = [];
let dp = [1, 1, 1, 2, 2];
let max = Math.max(...input);

for (let i = 5; i < max; i++) {
  dp[i] = dp[i - 1] + dp[i - 5];
  result.push(dp[i]);
}

console.log(dp[6]);
