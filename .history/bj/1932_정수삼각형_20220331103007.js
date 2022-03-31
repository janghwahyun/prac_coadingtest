let fs = require('fs');
let filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

let [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');
const N = +n;
let dp = arr.map(v => v.split(' ').map(v => +v));

console.log(N);

// 일반화
// sum(i, j) = node(i, j) + Math.max(node(i - 1, j - 1), node(i - 1, j));

for (let i = 1; i < N; i++) {
  for (let j = 0; j < dp[i].length; j++) {
    if (j == 0) {
      dp[i][j] = dp[i][j] + dp[i - 1][j];
    } else if (j == dp[i].length - 1) {
      dp[i][j] = dp[i][j] + dp[i - 1][j - 1];
    } else dp[i][j] = dp[i][j] + Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
  }
}

const answer = Math.max(...dp[N - 1]);
console.log(answer);
