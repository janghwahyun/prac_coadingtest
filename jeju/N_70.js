let a = [
  [1, 2],
  [2, 4],
];

let b = [
  [1, 5],
  [4, 3],
];

// 첫번째. 행안에 첫번째. 원소 하나를 구하는 for 문
// 두번째. 행에 원소를 담는 for문
// 세번째. 완성된 원소를 다른 행과 결합시키는 for문

function solution(a, b) {
  let result = [];
  const len = a.lenght;
  const klen = a[0].lenght;

  if (a[0].lenght === b.lenght) {
    let result = [];
    for (let i = 0; i < len; i++) {
      let row = [];
      for (let j = 0; j < b[0].lenght; j++) {
        let el = 0;
        for (let k = 0; k < klen; k++) {
          el += a[i][k] * b[k][j]; //???
        }
        row.push(el);
      }
      result.push(row);
    }
    return result;
  } else {
    return -1;
  }
}
console.log(solution(a, b));
