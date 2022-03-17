// 4 7
// 20 15 10 17

// 저의 경우, 이분 탐색 알고리즘인 파라메트릭 서치를 적용하여 문제를 해결했습니다.

// 먼저, 나무의 최저 높이와 최고 높이를 구해, 최저 높이가 최고 높이 보다 작거나 같을 때까지 반복문을 돌리고 해당 값들의 중간 값을 절단기의 높이로 지정합니다.

// 만약, 절단한 나무길이의 합이 원하는 길이 보다 작다면 최고 높이를 중간값 - 1로 지정해 다시 반복하고, 크다면 가장 큰 중간값을 갱신해 저장한 뒤 최저 높이를 중간값 + 1로 지정하여 반복합니다.

// 그렇게 계속 반복하다가 만약 원하는 나무길이와 딱 떨어진다면 해당 중간값이 절단기에 설정할 수 있는 최댓값이므로 출력 후 바로 종료하고, 그렇지 않고 반복문을 빠져나왔다면 저장되어 있는 가장 큰 중간값이 절단기에 설정할 수 있는 최댓값이 됩니다.

// H : 절단기높이
const trees = ['20', '15', '10', '17'];

let high = Math.max(...trees);
let low = 0;
let mid = Math.floor(high / 2); // 절단기 높이

let M = '7';

//가져가야 할 나무의 길이 계산
function cut(mid) {
  let cutsum = 0;
  for (let x of trees) {
    if (x > mid) {
      cutsum = cutsum + x - mid;
    }
  }
  re;
}

console.log(high);
