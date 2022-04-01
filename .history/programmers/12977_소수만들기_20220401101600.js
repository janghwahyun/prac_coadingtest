// 3번을 뽑아야하니가 for문을 3번 돌려줌 <- 여기서부터 시작

const nums = [1, 2, 3, 4];

function solution(nums) {
  let answer = 0;
  let sumNum = 0;

  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; i <= nums.length; i++) {
      for (let k = j + 1; i <= nums.length; i++) {
        sumNum = nums[i] + nums[j] + nums[j];

        if (prime(sumNum)) {
          answer++;
        }
      }
    }
  }
  return answer;
}

function prime(n) {
  for (let i = 2; i < m; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

solution(n);
