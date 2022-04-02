function solution(numbers, target) {
  var answer = 0;

  function dfs(numbers, target, i, sum) {
    // sum과 target 이 일치하고 i가 input length 길이 만큼 다 돌았다면 answer 1 증가
    if (sum == target && i == numbers.length) {
      answer++;
      return;
    }

    if (i < numbers.length) {
      // 이렇게 dfs를 놓으면 numbers.length에 맞을때까지 +,-를 반복하며 돌린다
      dfs(numbers, target, i + 1, sum + numbers[i]);
      dfs(numbers, target, i + 1, sum - numbers[i]);
    }
  }
  dfs(numbers, target, 0, 0);
  return answer;
}
