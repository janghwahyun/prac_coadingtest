function mathBrackets(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
      count++;
    }
    if (arr[i] === ')') {
      count--;
    }
  }
  if (count !== 0) {
    return false;
  }

  let bracket = [];
  for (let i in arr) {
    if (arr[i] === '(') {
      bracket.push('(');
    }
    if (arr[i] === ')') {
      if (bracket.length === 0) {
        return false;
      }
      bracket.pop();
    }

    return true;
  }
}
const n = '()'.split('');
console.log(n);
console.log(mathBrackets(n));

//오름차순으로 정렬
const n = '1 3 8 4 2 5'.split(' ');

n.sort();

console.log(n);

function solution(n) {
  for (let i = 0; i < n.length - 1; i++) {
    if (Number(n[i]) + 1 !== Number(n[i + 1])) {
      return 'NO';
    }
  }
  return 'YES';
}

console.log(solution(n));
