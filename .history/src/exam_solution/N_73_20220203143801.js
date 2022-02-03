const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E'],
};

console.log(graph);

let user_input = ['A', 'F'];
console.log(user_input);
// 최단거리 시작점, 끝점
const start = user_input[0];
const end = user_input[1];

let queue = [start];
let visited = [start];

function solution() {
  let count = -1; // A가 들어오면서 카운트되면 1이니까 -1을해서 0을 맞춰준다???

  while (queue.length !== 0) {
    count += 1;
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.splice(0, 1);
      if (node == end) {
        return count;
      }
      for (let next_node in graph[node]) {
        if (!visited.includes(graph[node][next_node])) {
          visited.push(graph[node][next_node]);
          queue.push(graph[node][next_node]);
        }
      }
    }
  }
}

console.log(solution());
