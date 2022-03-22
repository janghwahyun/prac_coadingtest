let num = [3, 0, 4, 0];
let stack = [];
let result = 0;

for (let i in num) {
  if (num[i] === '0') {
    stack.pop();
  } else {
    stack.push(num[i]);
    result = result + parseInt(num[i]);
  }
}

console.log(result);
