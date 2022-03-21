let arr = [];
// 모든 자릿수를 더한 배열
let total = 0;

for (let i = 0; i < 20; i++) {
  arr[i] = i + 1;
}

arr.forEach(n => {
  while (n) {
    total = total + (n % 10);
    n = Math.floor(n / 10);
  }
});

console.log(arr);
