const fs = require('fs');
const { isModuleNamespaceObject } = require('util/types');

let input = (fs.readFileSync('./test') + '').toString().trim().split('\n')

// push
스택.push();
// pop 스택에 자료 없을경우 -1 출력
스택.pop()? 0 : return console.log(-1);
// size 스택에 들어있는 정수의 개수
console.log(스택.length)
// empty 비어있으면 1, 아니면 0 출력
if(스택.length === 0){
	return console.log(1);
}else {
	return console.log(-1)
}
// top 스택에 정수가 없다면 -1 출력
if(스택.length === 0){
	return console.log(-1);
}


