### 문제별 Key 정리 // 우크라이나 화이팅~

<!-- <details>
	<summary>79</summary>
<br>

</details>
<br> -->

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
	<summary>59</summary>
<br>
    padstart(n, '=') // n은 처음길이 =은 문자열
</details>
<br>

<details>
	<summary>60</summary>
<br>
* for in index // 1,2,3,4
* for of 각각의 요소 // 이름1, 이름2, 이름3

</details>
<br>

<details>
	<summary>61</summary>
<br>
* Object.match(/a/g) // a를 글로벌하게 찾자라는 뜻임 
</details>
<br>

<details>
	<summary>64</summary>
<br>
    n % 7 == 0 // 7나누자
    n / 7      // 7로 나눈 나머지
</details>
<br>

<details>
	<summary>65</summary>
<br>
    map(e, i) // e는 각각의 인자 값ex) a, b, c / i는 index 값 ex) 0, 1, 2
    map ((e, i) => [e, i]) // [e, i]는 리턴 값
* index배열에서 index는 배열 시작으로부터 몇번째 위치???
* map과 for each는 하는일이 같은데, for each는 return 값이 undefined로 나옴.

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
	<summary>69</summary>
<br>
* includes() VS Filter()

    includes는 요소를 true, false 반환
    Filter는 요소를 찾을 조건을 줄 수 있음

- slice() VS splice()

  slice(start, end) // 처음과 끝에 해당하는 인덱스 값 추출!
  splice(start, end, 추가1,추가2,추가3) // start: 배열의 변경을 시작할 index, end: 배열에서 제거할 요소의 수, 추가1: 배열의 추가요소

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
