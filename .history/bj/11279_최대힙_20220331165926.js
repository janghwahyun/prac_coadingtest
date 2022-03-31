// input 자연수는 배열의 추가
// 0나오면 배열에서 가장 큰 값 출력 그값을 배열에서 제거
// 배열이 비었는데 가장 큰 값을 출력하라고 하면 0을 출력

// INPUT 정의
let fs = require('fs');
let filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let N = input.shift();

for (i = 0; i < N - 1; i++) {
  let arr = [];
  if (input[i] >= 0) {
    arr.push(input[i]);
  }
  console.log(arr);
}

// if (input[i] === '0') {
//   arr.remove(Math.max(arr[i]));
// }
