//20190923
const num = "aacdddddddddfffffffffgghhh ";

let result = "";

console.log(
  `${num.match(/a/g).length}${Number(num.match(/b/g))}${num.match(/c/g).length}${num.match(/d/g).length}${Number(num.match(/e/g))}${num.match(/f/g).length}${num.match(/g/g).length}${num.match(/h/g).length}`
);
