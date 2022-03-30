const num = ['7', '3'];

//A + B
let plus = parseInt(num[0], 10) + parseInt(num[1], 10);

//A-B
let minus = parseInt(num[0], 10) - parseInt(num[1], 10);

//A*B
let multi = parseInt(num[0], 10) * parseInt(num[1], 10);

//A/B(몫)
let 몫 = Math.floor(parseInt(num[0], 10) / parseInt(num[1], 10));

//A%B(나머지)
let 나머지 = parseInt(num[0], 10) % parseInt(num[1], 10);

console.log(plus, minus, multi, 몫, 나머지);
