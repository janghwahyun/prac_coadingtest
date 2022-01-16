const score = ['97', '86', '75', '66', '55', '97', '85', '97', '97', '95'];

const result = '';

score.sort(function (a, b) {
  return a - b;
});

console.log(score);

let top3 = []; //1~3등까지 학생 점수
let count = 0; //1~3등 학생 점수

while (top3.length < 4) {
  let value = score.pop();
  if (!top3.includes(value)) {
    top3.push(value);
  }
  count++;
}

console.log(top3);
console.log(count - 1);
