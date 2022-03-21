const nationWidth = {
  korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

const w = nationWidth['korea'];
delete nationWidth['korea'];

console.log(nationWidth);

const entry = Object.entries(nationWidth);
console.log(entry);

const value = Object.values(nationWidth);
console.log(value);

// 최댓값을 만들어 놓고 비교해가며 작은 값이 나왔을 때,
// 저장해주는 용도로 사용함 => 비교할 값 저장
let gap = Math.max.apply(null, value);
console.log(gap);
let item = [];

//최소값을 찾는 알고리즘
for (let i in entry) {
  if (gap > Math.abs(entry[i][1] - w)) {
    gap = Math.abs(entry[i][1] - w);
    item = entry[i];
  }
}

console.log(item[0], item[1] - w);
