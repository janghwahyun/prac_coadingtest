// 하샤수 출력 조건
// 18 = 1 + 8 + 9 / 18 % 9=0 (나머지가 0, 나누어 떨어저면 true)
// 11 = 1 + 1 = 2 / 11 % 2 = 1 (나누어 떨어짖지 않으므로 false)
// ab = a + b = sum(a,b) / ab % sum(a,b) = 0 이면 true, 0이 아니면 false
// => 그럼 이제 나머지르 이용해 0일 경우에 true를 출력하면 되겠다.

function solution(x) {
  // x = 18
  var sum = 0;
  var arr = String(x).split(''); // [1,8]

  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]); // 1 + 8
  }
}
