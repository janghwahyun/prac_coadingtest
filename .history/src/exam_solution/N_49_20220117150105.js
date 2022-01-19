let arr = '10 9 8 7 6 5 4 3 2 1';

arr = arr.split(' ').map(n => {
  //parseInt 가장 큰 정수를 반환
  return parseInt(n, 10);
});

console.log(arr);
