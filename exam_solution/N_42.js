const day = ['월', '화', '수', '목', '금', '토', '일'];
const month = 5;
const date = 5;

function solution(a, b) {
  const theDay = new Date(`2021-${a}-${b}`);
  console.log(day[theDay.getDay()]);
}

solution(month, date);
