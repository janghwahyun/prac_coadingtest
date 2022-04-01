let fs = require('fs');
let filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let [N, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

let visited = [];
for (let i = 0; i < N; i++) {
  visited.push(new Array(N).fill(false));
}

console.log(visited);

// 전체탐색

// dfs
