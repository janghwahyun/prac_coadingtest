function solution(n) {
  let answer = '1';

  if (n === 1) {
    return 1;
  }

  for (let i = 1; i < n; i++) {
    answer = rule(answer);
  }

  return answer;
}

function rule(answer) {
  let answerMax = 9;
  let result = '';

  for (let i = 1; i < answerMax; i++) {
    let re = new RegExp(i, 'g');
    let count = (answer.match(re) || []).length; //아무것도 없을때를 대비해서 빈배열을 만들어줌[]

    if (count >= 1) {
      result = result + String(i) + String(count);
    }
  }
  return result;
}

// const user_input = 7;
// console.log(solution(user_input));

// const a = [1, 2, 3];
// console.log(Math.max(...a)); => spread는 배열을 한커플 배껴서 요소를 반환해 줌.
// console.log(Math.max(...a)); => undefined
