let fs = require('fs');
let filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

let arr = ...arr;
let input = [];
for(let row of ...arr){
	input.push(row.split(" "));
}

console.log(input);

위아래 좌우가 하나라도 1이면 카운트를해라 