let fs = require('fs');
let filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let [a, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(num => parseInt(num));

input.shift();
let N = input;

let dp = [1, 1, 1, 2, 2];

for (let i = dp.length; i < N.length; i++) {
  let result = dp[i - 1] + dp[n - 5];
  dp.push(result);
  console.log(result);
}
