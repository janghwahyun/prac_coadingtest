const love = "복잡한 세상 편하게 살자".split(" ");
console.log(love);

let result = "";

for (let s of love) {
  console.log(s[0]);
  result += s[0];
}

console.log(result);
