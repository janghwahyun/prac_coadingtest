//내장 method를 이용해서 아주 쉽게 풀 수 있음

const n = 100000000;
console.log(n.toLocaleString());

// 다른 방식
function comma(s){
    if(s.length <= 3){
      return s;
    }else {
      return comma(s.slice(0, s.length - 3 )) + "," + s.slice(s.length - 3)
    }
  }
  console.log(comma("12312415"));
  
  // 자바스크립트 팩토리얼,시그마, 문자열거꾸로 출력연습해봐