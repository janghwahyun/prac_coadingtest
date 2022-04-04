function solution(n, computers) {
  
    let visited = Array(n).fill(0);
    let stack = [];
    var answer = 0;

  for (let i = 0; i < n; i++) { // 모든 node가 연결되어 있지 않기 때문에 for문
    // 최초 방문 시
    if (visited[i] === 0) { // i를 방문한적이 없다면 (1: 방문)
      stack.push(i);
      visited[i] = 1; // visited 방문 체크

      // DFS
      while (stack.length > 0) { // stack에 요소가 남아있으면 반복함
        let current = stack.pop(); // current는 stack의 가장 끝 요소임.
        
        
        for (let j=0; j < n; j++) { // current 요소를 돌면서 
            // 배열[i][j]가 1이면 서로 연결이고 && 미방문시            
          if (computers[current][j] == 1 && visited[j] == 0) { 
            stack.push(j);
            visited[j] = 1; // visted 방문체크
          }
        }
      }
    // while문을 나온 순간 stack은 빈 배열일 것이고, 다시 i++을 하고 for문을 돈다
    // 방문한 적이 있으면 visited가 true일 것이기 때문에 stack push가 일어나지 않음
    // 방문하지 않은 node만 찾아서 stack push / count++ 
    // 최초 방문이 일어날 때마다 집합이 생김
    function solution(n, computers) {
  
    let visited = Array(n).fill(0);
    let stack = [];
    var answer = 0;

  for (let i = 0; i < n; i++) { // 모든 node가 연결되어 있지 않기 때문에 for문
    // 최초 방문 시
    if (visited[i] === 0) { // i를 방문한적이 없다면 (1: 방문)
      stack.push(i);
      visited[i] = 1; // visited 방문 체크

      // DFS
      while (stack.length > 0) { // stack에 요소가 남아있으면 반복함
        let current = stack.pop(); // current는 stack의 가장 끝 요소임.
    
        
        for (let j=0; j < n; j++) { // current 요소를 돌면서 
            // 배열[i][j]가 1이면 서로 연결이고 && 미방문시
            // 
          if (computers[current][j] == 1 && visited[j] == 0) { 
            stack.push(j);
            visited[j] = 1; // visted 방문체크
          }
        }
      }
    // while문을 나온 순간 stack은 빈 배열일 것이고, 다시 i++을 하고 for문을 돈다
    // 방문한 적이 있으면 visited가 true일 것이기 때문에 stack push가 일어나지 않음
    // 방문하지 않은 node만 찾아서 stack push / count++ 
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