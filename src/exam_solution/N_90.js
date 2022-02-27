//아스키코드
let l = [];

for (let i = 65; i < 91; i++) {
  l.push(String.fromCharCode(i));
}

//l에서 랜덤으로 8개 뽑은 후 리턴
function randomItem(a) {
  let string = [];
  while (string.length !== 8) {
    let b = a[Math.floor(Math.random() * a.length)];
    if (!string.includes(b)) {
      string.push(b);
    }
  }
  let medicine = string.join('');

  return medicine;
}
//100개의 다른 의약성분 배열에 저장
let total_medicine = [];

for (let i = 0; i < 100; i++) {
  let m = randomItem(l);
  if (!total_medicine.includes(m)) {
    total_medicine.push(m);
  }
}
//user_input과 같은 성분이 있는 데이터 result에 저장
const user_input = prompt('입력하세요').split(' ');
let result = [];

for (let i of total_medicine) {
  //Set을 이용하여 교집합 구하기
  let setUser = new Set(user_input[0]);
  let setTotal = new Set(i);
  let interSection = new Set([...setUser].filter(x => setTotal.has(x)));
  //Set에서는 includes 또는 indexOf 대신 has()를 사용 - 값이 있는지 확인
  if (interSection.size === parseInt(user_input[1], 10)) {
    result.push(i);
  }
}

console.log('result', result);
console.log(result.length);
