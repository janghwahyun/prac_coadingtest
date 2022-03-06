### 문제별 Key 정리 // 주의!!! 시선을 생각하지 않은 주관적인 설명들이 전부를 이루고 있음.

<!-- <details>
	<summary>79</summary>
<br>

</details>
 -->

 <details>
	<summary>34 | sort()</summary>
	
	sort() // 매개변수가 아무것도 없다면 문자열의 순서대로 정리해줌(숫자열 x) 즉, 문자열을 정리해주는 메소드
    but! "156 172 ~~~ 136"을 넣음녀 문자열을 정리해 주는데, 
    "156 172 136 95" 이러면 앞자리가 9인 숫자이므로 정렬을 하지 않는다.
    따라서 sort() 매개변수 안에 함수를 넣어줌
---
    join()이란 메소드는 배열의 있는 워소들을 하나로 묶어 문자열로 반화해줌 
    만약 join(" ")는 공백에 저장해 줌.
    
<br>

</details>

<details>
	<summary>37 | reduce()</summary>
<br>
    
    원법이 1표, 혜원이 4표를 담아줄 객체가 필요.
    {원법:1, 혜원: 5}
---
    reduce() 
</details>

<details>
	<summary>38</summary>
<br>
   
   * 숫자를 오름차순으로 정리하고 싶다???(오른쪽 끝에 가장 큰 수 위치) => map()을 돌려 큰 숫자 거르기(중복허용)

    * while()

</details>

<details>
	<summary>39 | split(), join()</summary>
<br>
   
   내용 첨부해야 함.
</details>

<details>
	<summary>42</summary>
<br>

    new Date() // Date(Date 객체 생성)객체는 현재 시간과 차이가 있고 moment를 쓰면 보상 가능 하다.

    Date객체는 getDay라는 method존재 (그날의 요일정보를 숫자로 변환 ex: tue => 2)

</details>

<details>
	<summary>51</summary>
<br>
    shift() // 배열에서 첫번째 요소 제거 후 나머지 반환

    const Arr = [1, 2, 3];
    const result = Arr.shift([Arr[0]]);
    => Arr = [2 , 3];

</details>

<details>
    <summary>52</summary>
<br>
	
    quick sort() // 기준값을 세우는게 핵심
    Object.concat() // 배열을 서로 붙여줌
</details>

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

<details>
	<summary>59</summary>
<br>
	
    padstart(n, '=') // n은 처음길이 =은 문자열
</details>

<details>
	<summary>60</summary>
<br>
	
    for in index // 1,2,3,4
    for of 각각의 요소 // 이름1, 이름2, 이름3

</details>

<details>
	<summary>61</summary>
<br>
	
    Object.match(/a/g) // a를 글로벌하게 찾자라는 뜻임 
</details>

<details>
	<summary>64</summary>
<br>
    n % 7 == 0 // 7나누자
    n / 7      // 7로 나눈 나머지
</details>

<details>
	<summary>65</summary>
<br>
	map(e, i) // e는 각각의 인자 값ex) a, b, c / i는 index 값 ex) 0, 1, 2
    map ((e, i) => [e, i]) // [e, i]는 리턴 값
index배열에서 index는 배열 시작으로부터 몇번째 위치???
map과 for each는 하는일이 같은데, for each는 return 값이 undefined로 나옴.
따라서 return값에 배열을 만들어 줘야 함.
    incluse는 포험의 유무를 true, false로 반환함.

</details>

<details>
	<summary>66</summary>
<br>
	for(i=0, i<버스시간.length, i++){}
    =>

    for (i in 버스시간){
    console.log(버스시간[i])
    }

</details>

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

<details>
	<summary>79</summary>
<br>
	
    unshift(test.pop()); 
    pop메소드로 제거된 요소들을 맨 앞으로 밀어줌
</details>

<details>
	<summary>81</summary>
<br>
    
	replace('i', 'p'); // i를 p로 바꿔주자
</details>
<br>
