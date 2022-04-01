let fs = require('fs');
let filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let [n, ...arr] = fs.readFileSync(filePath).toString().trim();

let input = [];

console.log(...arr);

// 1으로 끝나는 덩어리들을 하나의 배열로 묶고 거기서 1의 개수를 세라
