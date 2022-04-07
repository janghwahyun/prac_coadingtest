let answer = [];
const visited = [];

const solution = tickets => {
  //모든 티켓들을 한번씩 방문하며 순회한다.
  for (let i = 0; i < tickets.length; i++) {
    let stack = [];
    // 시작점이 ICN이 아니라면
    if (tickets[i][0] !== 'ICN') continue;
    visited[i] = true;
    stack.push(tickets[i][0]);
    dfs(tickets, stack, i);
    visited[i] = false;
    stack.pop();
  }
  return answer;
};

const dfs = (tickets, stack, currentTicket) => {
  if (tickets.length === stack.length) {
    //마지막 도착지를 더해줌
    stack.push(tickets[currentTicket][1]);
    //처음답은 그냥 넣고  그 다음 부터는 알파벳 비교
    if (answer.length === 0) {
      answer = stack.slice();
    } else if (answer > stack) {
      answer = stack.slice();
    }
    stack.pop(tickets[currentTicket][1]);
    return;
  }
  for (let i = 0; i < tickets.length; i++) {
    if (!visited[i] && tickets[currentTicket][1] === tickets[i][0]) {
      visited[i] = true;
      stack.push(tickets[i][0]);
      dfs(tickets, stack, i);
      visited[i] = false;
      stack.pop();
    }
  }
};
