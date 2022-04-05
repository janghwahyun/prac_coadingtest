// dfs function을 만들고 매개변수가 어떤게 들어갈지 생각하는 연습이 필요함
// 네트워크 문제에서 서로의 노드가 1로 연결되어 있는 점과 비슷하다고 생각했음


// 다른 풀이
function solution(tickets) {
  tickets.sort(); // 글자순 정렬
  let visited = Array(tickets.length).fill(false);
  var answer = [];
  function dfs(current, cnt, path) {
    if (cnt === tickets.length && answer.length === 0) {
      //정렬했으므로 처음오는 경우의 수가 답
      answer = path;
      return;
    }
    for (let i = 0; i < tickets.length; i += 1) {
      if (visited[i]) continue;
      if (tickets[i][0] === current) {
        // 출발하는 공항이 같다.
        visited[i] = true;
        dfs(tickets[i][1], cnt + 1, [...path, tickets[i][1]]); //배열 복사해서 넣어주기
        visited[i] = false;
      }
    }
  }
  dfs('ICN', 0, ['ICN']);
  return answer;

  
}
// 다른 풀이

function solution(tickets){
       let routes = [];  //가능한 루트들을 담을 배열
                       
       function dfs (extraTickets, currentLocation,route ) {
       //3가지 인자를 받는다. 남은 티켓들, 현재 위치, 배열
            if(extraTickets.length===0){
            //extraTickets의 길이가 0이라는 것은 tickets에 있는 티켓을 모두 사용했다는것.
            //그렇지 않을 경우엔 길이가 0이 될 수 없다.
           		routes.push(route)
                //모두 사용했으니 route를 routes에 푸쉬해주자. 
                console.log(routes); //한번찍어봄
            }
            else{
            //길이가 0이 아니라면 아직 티켓이 남았다는 얘기
                extraTickets.forEach(([departure, destination], index) => {
                //forEach문으로 구조분해할당으로 하나의 배열마다 접근하고, 인덱스 가져온다.
                   if( currentLocation === departure){
                   //현재 위치와 출발지가 같다는 조건을 만들어준다. 출발지랑 같아야 한다.(명심)
                        const newTickets = extraTickets.slice(); //티켓을 얕은 복사해서
                        newTickets.splice(index,1)   
                        //커런트로케이션이랑 같은 디파츄어가 있는 배열을 빼준 배열을 만든다.
                        
                        dfs(newTickets, destination, route.concat(destination))
                     //하나가 빠진 배열과 데스티네이션, 도착지를 추가한 배열을 재귀돌린다.
                     //한바퀴를 돈 상태에선 다음과 같을거다.
 //dfs([ ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL", "SFO"]]) , "SFO", ["ICN","SFO"])
                    }
                });
            }
        }
        dfs(tickets , "ICN" , ["ICN"])
        //초기값을 설정한다. 인천에서 출발하여야하니 현재위치에 인천을,
        배열안에도 인천을 넣어준 상태로 출발
        return  routes.sort()[0];
        //오름차순 정렬해서 첫번째 요소만 꺼낸다.
    }