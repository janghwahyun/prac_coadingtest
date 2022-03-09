### 문제별 Key 정리 // 주의!!! 시선을 생각하지 않은 주관적인 설명들이 전부를 이루고 있음.

<!-- <details>
	<summary>79</summary>
<br>

</details>
 -->

<details>
	<summary>매개변수 VS 인수</summary>
<br>

    매개변수(parameter)와 인수(arguments)를 정리하자면
    매개변수는 함수에 입력으로 전달된 값을 받는 변수임.
    인수는 함수를 호출할 때 전달하는 입려값을 말함.

<br>

    예를 들면
    defadd(a, b) -> a,b는 매개변수
    return a + b

    print(add(3 ,4 )) -> 3, 4는 인수

</details>

<details>
	<summary>1 | 배열삭제 내장함수</summary>
<br>

    pop() // 뒤에서 삭제

</details>

<details>
	<summary>2 | split()</summary>
<br>

    split() //

</details>

<details>
	<summary>3</summary>
<br>

     JS 타입은 크게 2가지
     <br>
    1. 원시 : Number, string, boolean, undefine, null
    2. 참조형 : Object ex) 배열

</details>

<details>
	<summary>8</summary>
<br>

    중복된 객체는 마지막 값을 불러옴

</details>

<details>
	<summary>16</summary>
<br>

    메소드 체인 : 메소드의 연결은 JS족틍
    ex) split().reverse().join()

</details>

<details>
	<summary>18</summary>
<br>

    소숫점 자리를 버리자 -> Math.floor() // 주어진 값보다 이하의 가장 큰 정수를 반환

</details>

<details>
	<summary>19</summary>
<br>

    Math.pow() // 제곱 method

</details>

<details>
	<summary>21</summary>
<br>

    SET // 중복되지 않은 Data를 저장하는 Data구조. (중복 허용 x)

</details>

<details>
	<summary>24</summary>
<br>

- toUppercase // 소문자 -> 대문자
- toLowercase // 대문자 -> 소문자

</details>

<details>
	<summary>26</summary>
<br>

    key : value

    console.log(planets[Name])  =x console.log(planets.name)

</details>

<details>
	<summary>30 | 문자열 속 문자 찾기</summary>
<br>

    .indexof('apple')

</details>

<details>
	<summary>31 | 복잡도</summary>
<br>

    O(1) 용량과 길이 여부 상관x 복잡도가 일정

</details>

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
</details>

<details>
	<summary>38 | while()</summary>
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
	<summary>43 | 10진수 => 2진수</summary>
<br>
    
</details>

<details>
	<summary>44</summary>
<br>

    push() // 배열의 어떤값을 저장하는 메소드

<br>

    Math.floor() // 주어진 숫자와 같거나 작은 정수 중 큰것을 반환
    ex) console.log(Math.floor(5.95)) // 5가 반환

</details>

<details>
	<summary>46 | forEach(()=>{});</summary>
<br>

    배열을 넣고 순환해서 합을 반환

</details>

<details>
	<summary>47 | add VS push</summary>
<br>

    result.add(); // size, 객체수
    배열을 저장한느 push();

</details>

<details>
	<summary>48</summary>
<br>

    문자열("")탐색O 변경X -> 새로운 배열을 만들고
    "a", "b" ... -> 배열의 원소열을 문자열로 반화하는 법

</details>

<details>
	<summary>49</summary>
<br>

    배열을 sort()로 정리 후, 최대값을 찾는다.
    map()메소드는 매개변수로 들어가 있는 함수를 배열의 원소들의 적용.
    그 값을 최종적으로 새로운 배열로 반환함.

</details>

<details>
	<summary>50 | slice()</summary>
<br>

    slice() // 시작과 끝의 번호(length)를 지정해주면 새로운 객체로 변환
    원본배열이 바뀌지 X (기존 arr를 변경x 정렬된 사본을 만들기 위함)

    ex) const animals = ["개", "강아지", "코끼리", "호랑이"]

        animals.slice(2) // 2번부터 시작해서 끝까지 자르고, 자린 배열을 반환 => Array["코끼리", "호랑이"]

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
