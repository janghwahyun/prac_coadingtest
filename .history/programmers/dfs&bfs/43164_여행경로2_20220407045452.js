let answer = [];
const visited = [];

const dfs = (tickets, temp, currentTicket) => {
  if (tickets.length === temp.length) {
    //마지막 도착지를 더해줌
    temp.push(tickets[currentTicket][1]);
    //처음답은 그냥 넣고  그 다음 부터는 알파벳 비교
    if (answer.length === 0) {
      answer = temp.slice();
    } else if (answer > temp) {
      answer = temp.slice();
    }
    temp.pop(tickets[currentTicket][1]);
    return;
  }
  for (let i = 0; i < tickets.length; i++) {
    if (!visited[i] && tickets[currentTicket][1] === tickets[i][0]) {
      visited[i] = true;
      temp.push(tickets[i][0]);
      dfs(tickets, temp, i);
      visited[i] = false;
      temp.pop();
    }
  }
};

const solution = tickets => {
  //모든 티켓들을 한번씩 방문하며 순회한다.
  for (let i = 0; i < tickets.length; i++) {
    let temp = [];
    if (tickets[i][0] !== 'ICN') continue;
    visited[i] = true;
    temp.push(tickets[i][0]);
    dfs(tickets, temp, i);
    visited[i] = false;
    temp.pop();
  }
  return answer;
};
