// input 자연수는 배열의 추가
// 0나오면 배열에서 가장 큰 값 출력 그값을 배열에서 제거
// 배열이 비었는데 가장 큰 값을 출력하라고 하면 0을 출력

let fs = require('fs');
let filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift();
console.log(typeOf(input));

if (input[i] === '0') {
}
