function solution(num) {
  let answer = 0;

  for (let i = 0; i < 10; i++) {
    if (!num.includes(i)) answer += i;
  }

  return answer;
}

let numbers = [5, 8, 4, 0, 6, 7, 9];
console.log(solution(numbers)); // 6
