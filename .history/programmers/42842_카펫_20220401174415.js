// 바뀌지 않는 사실은
// - 가로 > 세로

// 2개식으로
 옐로 = (가로 - 2) * (세로 - 2) 
 브라운 = x*y - 옐로 
 2식을 전개하면 -> x + y = 브라운/2 + 2 


// 로직
// 	1씩 증가하는 i를 sum의 나누어 주게 되면 나머지 몫이 정해지게 된다.
// 	y(세로 길이로써 x보다 작아야함)를 i로 두게된 이유는 i가 작은 수 부터 커지게 되고, i가 작을 수록 자연스럽게 x 값이 커진다.
// 	i가 x보다 커지기 전에 즉  i > x, if문 조건에 걸리게 되고 헝성 i < x가 커지는 조건을 만족한다
// 여기서 핵심은 x와 y의 관계를 이용한 깔끔한 풀이라고 생각된다

function solution(brown, yellow) {
  let sum = brown + yellow;

  for (let i = 3; i <= sum / i; i++) {
    let x = Math.floor(sum / i);
    if ((x - 2) * (i - 2) === yellow) {
      break;
    }
  }

  return [x, i];
}


function solution(brown, yellow) {
    var answer = [];
    for(var x=1 ; x<=5000 ; ++x) { // 갈색 칸의 크기가 1부터 5000이므로 가로는 5000까지 가능
        for(var y=1 ; y<=x ; ++y) { // 세로는 가로보다 작거나 같다
            if(2*x+2*y-4==brown && x*y==brown+yellow) {
              // 가로 두번 세로 두번을 더하고 각 꼭짓점을 빼면 테두리의 값 즉, 갈색의 값이다. 그리고 면적(모든 칸의 개수)에서 갈색을 빼면 노란색이다.
              // 이 두 조건을 만족하는 x y 를 구하면 된다.
                answer.push(x); answer.push(y);
                break;
            }
        }
    }
    return answer;
}