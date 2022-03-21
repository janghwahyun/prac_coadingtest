// 버스도착 시간 알림
const 버스시간 = ['12:30', '13:20', '14:13'];
const 기준시간 = '12:40';

function solution(버스시간, 기준시간) {
  let answer = [];
  기준시간 = 기준시간.split(':').map(n => parseInt(n, 10)); // 문자열 => 정수형
  기준시간 = 기준시간[0] * 60 + 기준시간[1];
  for (let i in 버스시간) {
    console.log(버스시간[i]);
    let time = 버스시간[i].split(':').map(n => parseInt(n, 10));
    time = time[0] * 60 + time[1];
    if (time < 기준시간) {
      answer.push('지나갔습니다');
    } else {
      let 시간 = parseInt((time - 기준시간) / 60, 10);
      let 분 = parseInt((time - 기준시간) % 60, 10);
      // answer.push([시간, 분]); 이렇게 하면 안되고 string으로 만들어줘야지
      answer.push(
        String(시간).padStart(2, '0') +
          ' 시간 ' +
          String(분).padStart(2, '0') +
          ' 분 '
      );
    }
  }
  return answer;
}

console.log(solution(버스시간, 기준시간));
