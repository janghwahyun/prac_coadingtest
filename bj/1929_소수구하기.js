// https://jm-park.github.io/algorithm/2018/08/06/Prime-Number(%EC%86%8C%EC%88%98)-%ED%8C%90%EB%B3%84%EB%B2%95-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98.html

// 에라토스테네스의 체
// 왜 제곱근을 ?? =>
// 즉, n의 모든 약수에 해당하는 a와 b가 어떠한 약수이더라도 둘 중 하나는 무조건 m(=sqrt(n)) 이하 이므로,
// m까지만 조사한다면 n이 소수인지 알 수 있게 되는 것이다.

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let N = Number(input[0]);
let M = Number(input[1]);
let isPrimeNumber = Array(M + 1).fill(true); // 0부터 M까지 true로 채운배열
isPrimeNumber[0] = isPrimeNumber[1] = false; // 0 과 1은 소수가 아니므로 false로 바꿔준다.

function result() {
  // 2부터 시작. 주어진값 N의 제곱근까지 i의 배수들을 모두 false로 만들어준다(i는 여전히 true),
  for (let i = 2; i <= Math.ceil(Math.sqrt(M)); i++) {
    if (isPrimeNumber[i]) {
      let m = 2; // 배수들을 구하기위해 곱해줄 수.
      isPrimeNumber[i * m] = false; // i의 배수들을 false로 바꾼다.
      m++; // i * m은 초기에 2 * 2 이고 m++ 해줌으로써 i + m은 2 * 3으로 바뀐다.
    }
  }
}

const results = []; // 결과값을 담을 배열.
for (let i = N; i <= M; i++) {
  // N부터 M까지의 숫자 i가 소수인지 아닌지 확인하는 for문
  if (isPrimeNumber[i]) {
    results.push(i); // i가 소수라면 results배열에 추가시켜준다.
  }
}
console.log(results.join('\n').trim());

result();
