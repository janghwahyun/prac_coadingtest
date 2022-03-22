const arr = '(())'.split('');

function matchingbracket(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
      count++;
    }

    if (arr[i] === ')') {
      count--;
    }
  }

  if (count != 0) {
    return console.log('NO');
  }

  let bracket = [];
  for (let i in arr) {
    if (arr[i] === '(') {
      bracket.push('(');
    }
    if (arr[i] === ')') {
      if (bracket.length === 0) {
        return console.log('NO');
      }
      bracket.pop();
    }
    return console.log('YES');
  }
}

console.log(arr);
console.log(matchingbracket(arr));
