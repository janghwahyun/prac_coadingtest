let fs = require('fs');
let filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let [N, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

let input = [];

console.log(...arr);

const map = new Map[N][N]


// 1으로 끝나는 덩어리들을 하나의 배열로 묶고 거기서 1의 개수를 세라

[0,0]을 시작점으로해서 1을 발견하면 거기가 기준점이 되게 설정
상하좌우 탐색 위(-7) 아래(+7) 배열이 없다면 array out of index가 나오지

1. 배열안에 있을 조건
2. 연결이 되어있다 => "1"
3. 방문 조건