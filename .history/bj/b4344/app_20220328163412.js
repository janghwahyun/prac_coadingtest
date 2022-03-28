let fs = require('fs');
let input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');
const c = Number(input[0]);

console.log(c);
