let fs = require('fs');
let filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let [a, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
let N = input;

let dp = [1, 1, 1, 2, 2];

for (let i = 0; i < arr.length; i++) {
  const len = Number(arr[i]) + 1;
  const dp = new Array(len).fill(0);
  console.log(dp);

  let answer = [];

  for (let i = 5; i <= dp.lenghth - 1; i++) {
    dp[i] = dp[i - 1] + dp[n - 5];
  }

  answer.push(dp[i]);
}

// console.log(result[N]);

// solution
