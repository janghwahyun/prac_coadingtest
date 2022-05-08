// lottos배열을 순회하며 당첨배열에 있는 수를 return하고 총 갯수를 correct에 저장
// lottos배열을 순회하며 0이면 return후 총 갯수를 zeros에 저장
// 최저 순위는 7에서 맞은 갯수를 빼면되는데 맞은 갯수가 0일 경우 7위가 됨으로 6위로 변경해준다.
// 최고 순위는 최저 순위에서 0의 갯수를 빼주면 되는데 모두 다 0일 경우 min은 6, max는 0이 되므로 0을 1로 바꿔주면 된다.
// profile

function solution(lottos, win_nums) {
  var answer = [];

  const correct = lottos.filter(lotto => win_nums.includes(lotto)).length;

  const zeros = lottos.filter(lotto => lotto === 0).length;
  console.log(correct, zeros);

  let min = 7 - correct >= 6 ? 6 : 7 - correct;
  let max = min - zeros < 1 ? 1 : min - zeros;

  answer = [max, min];
  return answer;
}
