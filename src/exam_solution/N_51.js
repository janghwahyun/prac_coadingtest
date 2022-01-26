// 순서가 이렇게 됨
// [1, 3, 5, 4, 8, 6, 7, 2]
// [1, 3, 5, 4], [8, 6, 7, 2]
// [1], [3], [5], [4], [8], [6], [7], [2]
// [1, 3], [4, 5], [6, 8], [2, 7]
// [1, 3, 4, 5], [2, 6, 7, 8]
// [1, 2, 3, 4, 5, 6, 7, 8]

// 분할부분
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  //반으로 잘라주고
  const mid = Math.floor(arr.length / 2);
  //좌우로 나눈 배열을 계속 돌려줘야 하잖아
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  // 좌우 sort를 하나로 묶고
  return merge(mergeSort(left), mergeSort(right));
}

// 정렬하고 합치는 부분
function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    // 정렬해서 추가하는 코드
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}
// const array = prompt().split(' ').map(n => parseInt(n, 10));
const array = [1, 3, 5, 4, 8, 6, 7, 2];

console.log(array);
console.log(mergeSort(array));
