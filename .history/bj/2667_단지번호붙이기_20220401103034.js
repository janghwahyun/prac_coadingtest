let fs = require('fs');
let filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');
let arr = new Array(...arr);
console.log(arr);
