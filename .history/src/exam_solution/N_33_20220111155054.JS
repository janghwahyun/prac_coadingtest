const nums = '1 2 3 4 5 6';
//nums가 배역이 아니기 때문에, 빈칸을 기준으로 배열을 만들어 봄.
const arr = nums.split(' ').reverse();
let reversVal = '';

for (let i = 0; i < arr.length; i++) {
  reversVal = reversVal + arr[i] + ' ';
}

console.log(reversVal);
