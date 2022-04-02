function solution(n, computers) {
  var answer = 0;

  let visited = Array(n).fill(0);
  let stack = [];

  for (let i = 0; i < n; i++) {
    // 최초 방문 시
    if (visited[i] === 0) {
      stack.push(i);
      visited[i] = 1;

      // console.log(stack, visited);
      // [] [ 0, 0, 0 ]
      // [ 0 ] [ 1, 0, 0 ]
      // [ 0, 1 ] [ 1, 1, 0 ]
      // [ 0, 1, 2 ] [ 1, 1, 1 ]

      // DFS
      while (stack.length > 0) {
        let c = stack.pop();

        // console.log(c); => 0 1 2

        // 경로 연결 되어 있으면서 최초 방문일 경우
        for (let j in computers[c]) {
          if (computers[c][j] == 1 && visited[j] == 0) {
            // 배열[i][j]가 1이면 서로 연결이라며
            stack.push(j);
            visited[j] = 1;
          }
        }
      }

      // 최초 방문이 일어날 때마다 집합이 생김
      answer++;
    }
  }
  return answer;
}
