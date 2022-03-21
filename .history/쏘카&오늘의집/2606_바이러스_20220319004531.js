// 전형적인 DFS문제라서 딱히 언급할 것이 없다.
// 연결된 모든간선에 대해 dfs를 수행하되, 방문처리를 한 노드는 방문하지 않으면 된다.

const input = {
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
  console.log(result);
}
