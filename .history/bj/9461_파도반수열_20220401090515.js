let fs = require('fs');
let filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
console.log(input);

// p(n) = p(n-1) + p(n-5)

let dp = [1, 1, 1, 2, 2];

for (let i = 5; i <= dp.lenghth - 1; i++) {
  dp[i] = dp[i - 1] + dp[n - 5];
  dp.push(dp[i]);
}
