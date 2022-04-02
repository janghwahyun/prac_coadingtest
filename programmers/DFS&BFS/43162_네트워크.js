function solution(n, computers) {
  var answer = 0;

  let visited = Array(n).fill(0);
  let stack = [];

  for (let i = 0; i < n; i++) {
    // 최초 방문 시
    if (visited[i] === 0) {
      stack.push(i);
      visited[i] = 1;

      // DFS
      while (stack.length > 0) {
        let c = stack.pop();

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

// 다른풀이

function solution(n, computers) {
  const visited = Array.from({ length: n }, () => 0);
  let answer = 0;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      DFS(i);
      answer++;
    }
  }

  function DFS(node) {
    visited[node] = 1;
    for (let i = 0; i < n; i++) {
      if (computers[node][i] && !visited[i]) {
        DFS(i);
      }
    }
  }

  return answer;
}
// 비교적 자세히 설명되어져 있음
https://intrepidgeeks.com/tutorial/programmers-lv3-network-javascript-dfs-recursive-protect-me