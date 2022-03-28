let fs = require('fs');
let filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const c = Number(input[0]);

console.log(input);

// 주석잇음?
