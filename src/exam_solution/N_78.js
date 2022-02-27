//리스트를 순회하고 리스트에 있는 결과물을 삭제하는 문제

const user_input = prompt('입력해주세요').split(' ');
const n = parseInt(user_input[0], 10);
const k = parseInt(user_input[1], 10);

function sol(n, k) {
  let index = 0;
  // q에 n만큼의 숫자를 넣어준다.
  let q = [];
  for (let i = 0; i < n; i++) {
    q.push(i + 1);
  }
  //음식 2개를 남겨야 하기 때문에 lenght 2는 고정값
  while (q.length > 2) {
    if (index > q.length - 1) {
      // 순환하다 index가 q의 길이보다 클 경우에 q.length만큼 빼준다.
      // [1,2,3,4,5,6] -> 1다음 4가 빠지고 그 다음은 4+3 = 7(index : 6)이 빠져야 하는데
      // index(현재 빠져야 할 index)가 q.length보다 크므로 q.legnth, 즉 4를 빼준다.
      // 이걸 마지막 2개가 남을 때까지 반복한다.
      index -= q.length; //q.length를 빼줘야 배열 앞으로 돌아갈 수 있음.
    }

    q.splice(index, 1);
    index += k;
    index -= 1;
  }

  return q;
}

console.log(sol(n, k));
