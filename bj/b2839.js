const input = fs.readFileSync('/dev/stdin').toString().trim();

let sugar = 18;
let count = 0;

while (true) {
  if (sugar % 5 == 0) {
    count += parseInt(sugar / 5);
    break;
  } else if (sugar < 3) {
    sugar = -1;
    break;
  } else {
    sugar -= 3;
    count++;
  }
}

console.log(count);
