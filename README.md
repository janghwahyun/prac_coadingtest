### 문제별 Key 정리 // 우크라이나 화이팅~

<details>
	<summary>
		56
	</summary>
	<br>
	
    Object란 => {key : value } //{rusia : 17098242} 
    Array란 => 0: russia 1: 17098242
	
---
	
* Object.entries()???
entries를 사용하면 객체가 가지고 있는 모든 프로퍼티를 키와 값 쌍을 배열 형태로 반환해 줌.
예를들어
test = {
a: 1
b: 2
c: 3
};
먼저 test변수가 a,b,c,의 프로퍼티로 이루어져 있는데 Object.entries(test)메소드를 써보면 결과는 이렇다

[Array(2), Array(2), Array(2)]

0: (2)[a,1]
1: (2)[b,2]
2: (2)[a,3]

---

- Math.max.apply(null, numbers)
  fn.apply(thisArg, [args Array])
  this인자를 첫번째로 인자로 받고, 두번째 인자로 배열을 받음. 예를 들면
  var arr = [1,2,3,4,5,6];에서
  Math.mxx(arr);는 에러가 난다.
  왜냐면 전역변수?에 배열을 넣어 Math.max함수를 적용하면 오류가 남.
  Math.max.apply(null, arr); => 6을 반환 받는다

<br>

</details>
<br>

<details>
	<summary>66</summary>
<br>
	for(i=0, i<버스시간.length, i++){}

    =>

    for (i in 버스시간){
    console.log(버스시간[i])
    }

</details>
<br>

<details>
	<summary>79</summary>
<br>
	
    unshift(test.pop()); 
    pop메소드로 제거된 요소들을 맨 앞으로 밀어줌
</details>
<br>

<details>
	<summary>81</summary>
<br>
	
    replace('i', 'p'); // i를 p로 바꿔주자
</details>
<br>
