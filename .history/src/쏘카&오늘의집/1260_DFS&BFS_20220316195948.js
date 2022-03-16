const graph = {
  1: ['4'],
  2: ['4'],
  3: ['4'],
  4: ['1'],
};

function dfs(graph, start) {
  let visited = [];
  let stack = [start];

  while (stack.length != 0) {
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

function bfs(graph, start) {
  let visited = [];
  let queue = [start];

  while (queue.length != 0) {
    let n = queue.shift();

    // 중복 노드 방지
    if (!visited.includes(n)) {
      visited.push(n);
      let connected = graph[n].filter(x => !visited.includes(x));
      for (let i of connected) {
        queue.push(i);
      }
    }
  }
  return visited;
}

console.log(dfs(graph, '1'));
console.log(bfs(graph, '1'));
