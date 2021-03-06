// 2^n -1의 순환의 수를 가지는데 -1작은 값으로 O(2 ** n)

const route = []; //어느기둥에서 어디로 이동했다를 기록하는 배열

function hanoi(원반의수, 시작기둥, 목표기둥, 보조기둥) {
  //원판이 한 개일 때에는 바로 옮기면 됩니다.
  if (원반의수 === 1) {
    route.push([시작기둥, 목표기둥]);
    return 1;
  }

  //원반이 n-1개를 경유기둥으로 옮기고
  hanoi(원반의수 - 1, 시작기둥, 보조기둥, 목표기둥);
  //가장 큰 원반은 목표기둥으로
  route.push([시작기둥, 목표기둥]);
  //경유기둥과 시작기둥을 바꿉니다.
  hanoi(원반의수 - 1, 보조기둥, 목표기둥, 시작기둥);
}

hanoi(3, 'A', 'C', 'B');
console.log(route);
console.log(route.length);
