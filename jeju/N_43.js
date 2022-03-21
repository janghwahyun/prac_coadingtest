let dec = '32';
let arrBinary = [];

while (dec) {
  arrBinary.push(dec % 2);
  dec = Math.floor(dec / 2);
}

console.log(arrBinary.reverse().join(''));

// 더 쉬운 버전
let dec = 16;

console.log(dec.toString(2));
