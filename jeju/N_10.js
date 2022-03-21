let level = 5;

for (let i = 1; i <= level; i++) {
  let tree = ''; // tree를 초기화 해줘서 기존에 있던 별들이 누적되지 않게
  //공백증가 별이 오기전에
  for (let k = 1; k <= level - i; k++) {
    tree = tree + ' ';
  }

  //별 증가
  for (let j = 1; j <= i * 2 - 1; j++) {
    tree = tree + '*';
  }
  console.log(tree);
}

