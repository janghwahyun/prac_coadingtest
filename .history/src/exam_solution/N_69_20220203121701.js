// 소수저장
let prime = [];
// 소수판별
let isPrime = true;
let val = 100;
let 골드바흐파티션 = [];

// 소수를 구하기위한 2중 포문
for (let i = 2; i < val; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    prime.push(i);
  }
  isPrime = true;
}

for (let n of prime) {
  if (prime.includes(val - n) && n <= val - n) {
    골드바흐파티션.push([n, val - n]);
  }
}
let 차 = 골드바흐파티션.map(e => e[1] - e[0]);
console.log(골드바흐파티션);
console.log(차);

let 작은값 = Math.min.apply(null, 차);
let 큰값 = Math.max.apply(null, 차);

console.log(작은값);
console.log(큰값);
