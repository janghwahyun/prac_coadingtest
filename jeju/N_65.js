const a = [1, 4, 9, 16];
const b = ['a', 'b', 'c', 'd'];

let c = a.map(function (e, i) {
  if (i % 2 == 0) {
    return [b[i], e]; // RETURN을 배열로 감싸야지
  } else {
    return [e, b[i]];
  }
});
console.log(c);
