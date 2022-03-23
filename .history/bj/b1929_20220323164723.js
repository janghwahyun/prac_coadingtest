// 소수 자기 자신과 1로 나누어지는 숫자
// using nested loop

const primeN = parseInt(['3', '16']);
const arr = [];
for (let i = 3; i <= primeN[1]; i++) {
  if (primeN / i === primeN && primeN / i === 1) {
    arr.push(i);
  } else {
    returnl;
  }
}

console.log(arr);
