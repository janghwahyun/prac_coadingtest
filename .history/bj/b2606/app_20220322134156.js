const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(input);
