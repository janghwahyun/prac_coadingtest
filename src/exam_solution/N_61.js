//  카카오 입사문제

const num = "aaabbbcddddd";
// 출력할 스트링
let result = {};
// 저장할 스트링
let store = num[0];
// 알파벳 숫자르 셀
let count = 0;

// 문자열을 순회하다가 다른 문자가 나오면 카운드
for (let i of num) {
  console.log(i);
  if (i == store) {
    count += 1;
  } else {
    result += store + String(count);
    store = i;
  }
}
result += store + String(count);

console.log(result);
