let n = 24;
let result = 0;
while (true) {
  if (n % 7 == 0) {
    result = parseInt(n / 7, 10);
    console.log(result);
    break;
  }
  n -= 3;
  result += 1;
  if (n < 0) {
    console.log(-1);
    break;
  }
}

//  result += 1이 이해가 가지 않았는데,
// result가 의미하는것이 옮기는 횟수지 않나~
// 따라서 7로 나누지 않은 몫을 3으로 나누면
// 횟수가 한번 증가 하지 않나~~ 따라서
