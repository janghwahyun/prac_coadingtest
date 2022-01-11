const height = '176 156 155 165 166 169 95';
let sorted = '';

sorted = height
  .split(' ')
  .sort(function (a, b) {
    // console.log(a, b);
    return a - b;
  })
  .join(' ');

console.log(sorted);

if (height === sorted) {
  console.log('yes');
} else {
  console.log('no');
}
