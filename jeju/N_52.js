// 순서가 이렇게 됨
// [1, 3, 2, 7, 5, 6, 4, 8, 9, 10]
// [1,3,2,5,4] + [6] + [7, 8 ,9, 10]
// 인덱스를 길이의 반을 기준으로 나눔
// [1,3,2,5,4] + [6] + [7, 8], [9], [10]
// 1 + 2 [3, 4] + [5] + 6 + [7] + [8] + 9 + 10
// 1 + 2 + [3] + [4] + 5 + 6 + 7 + 8 + 9 + 10
// 1 + ~~ + 10

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0]; //기준점
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort().concat(pivot, quickSort(right));
}

const array = [1, 3, 2, 7, 5, 6, 4, 8, 9, 10];

console.log(array);
console.log(quickSort(array));
