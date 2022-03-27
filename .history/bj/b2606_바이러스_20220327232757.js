const graph = {
  1: ['2', '5'],
  2: ['1', '3', '5'],
  3: ['2'],
  4: ['7'],
  5: ['1', '2', '6'],
  6: ['5'],
  7: ['4'],
};

function solution(n, graph) {
  visited = new Array(n + 1).fill(false);
  let result = 0;

  result = dfs(n, 1);
  console.log(reslut);
}

function dfs(n, start) {
  visited[start] = true;
  let stack = [];
  let cnt = 0;

  stack.push(start);

  while (stack.length !== 0) {
    let tmp = stack.pop();
    for (let i = 0; i <= n; i++) {
      if (graph[tmp][i] === 1 && visited[i] === false) {
        stack.push(i);
        cnt = cnt + 1;
        visited[i] = true;
      }
    }
  }

  return cnt;
}
