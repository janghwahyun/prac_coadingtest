function solution(numbers) {
  let answer = numbers
    .map(a => String(a))
	.sort((a, b) => b + a - (a + b) 
  // // a+b - (b+a)는 왜 안됨? 
  // arr.sort([compareFunction])에서 compareFunction값이 음수면 오름차순, 양수이면 내림 차순으로 간다. 
  // 이때 매개변수로 a,b를 주는데 a,b가 원소들을 차례대로 돌면서 음수와 양수값을 바꾼다. 그러면? 원소값에 따라 a-b가 오름차순이 내림차순으로 바뀔 수 있다는 말인가?

    .join('');

  return answer[0] === '0' ? 0 : answer;
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
console.log(solution([0, 0, 0]));

// 풀다만거

function solution(numbers) {
 
  
  for (let i = 0; i < numbers.length -1 ; i++ ){
    let answer  = [];
    numbers.sort((a,b) => b-a);
    
    if (numbers[i] < 10){
      answer.push(numbers[i])
      console.log(answer);
    }
  }
  
  return;
}



// console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
// console.log(solution([0, 0, 0]));
