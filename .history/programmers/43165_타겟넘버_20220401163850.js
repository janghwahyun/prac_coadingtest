//

function solution(numbers, target) {
  var answer = 0;

  function dfs(numbers, target, i, sum) {
    if (sum == target && i == numbers.length) {
      answer++;
      return;
    }
    if (i < numbers.length) {
      dfs(numbers, target, i + 1, sum + numbers[i]);
      dfs(numbers, target, i + 1, sum - numbers[i]);
    }
  }
  dfs(numbers, target, 0, 0);
  return answer;
}
