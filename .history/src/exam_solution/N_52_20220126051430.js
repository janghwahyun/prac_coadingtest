// 순서가 이렇게 됨
// 가운데를 짜르고 기준보다 작으면 앞배열에, 많으면 뒷 배열에 넣는다
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 



function quickSort(arr){
  if (arr.length <= 1){
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i=1; i<arr.length; i++){
    if(/*빈칸을 채워주세요*/){
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return /*빈칸을 채워주세요*/
}

const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));

console.log(quickSort(array));