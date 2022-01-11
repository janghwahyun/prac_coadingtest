// 의식의 흐름 :

const height = prompt();
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
