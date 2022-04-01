var fs = require('fs');
let filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let N = input.shift();

let dx = [1, -1, 0, 0];
let dy = [0, 0, -1, 1];

// dfs
function dfs(graph, start) {
  let visited = [];
  let stack = [start];

  // stack에 요소가 담겨있다면
  while (stack.length !== 0) {
    let n = stack.pop();

    // 중복 노드 방지
    if (!visited.includes(n)) {
      visited.push(n);
      let connected = graph[n].filter(x => !visited.includes(x));
      for (let i of connected) {
        stack.push(i);
      }
    }
  }
  return visited;
}
