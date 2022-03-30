function solution(numbers) {
  let answer = numbers
    .map(a => String(a))
    .sort((a, b) => b + a - (a + b)) // a+b = (b+a)는 왜 안됨?
    .join('');

  return answer[0] === '0' ? 0 : answer;
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
console.log(solution([0, 0, 0]));
