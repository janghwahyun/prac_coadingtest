let s = '';

for(let i =0; i <17; i++){
    s+=i;
}

console.log(s);

let count = 0

for(let k in s){
    // console.log(k) //index 개수
  if(s[k] ==1 )
  count++;

}

console.log(count);


//간단 코딩
// console.log(s);
// console.log(s.match(/1/g).length);

//클래식 코딩
const obj = {};

for(i=0; i<=1000; i++){
    let temp = i;
    while (tmp > 0){
        let num = tmp % 10;
        if(obj[num]){
            obj[num]++;
        } else {
            obj[num] = 1; 
        }
        tmp = parseInt(tmp/10. 10)
    }
}

console.log(obj[1]);