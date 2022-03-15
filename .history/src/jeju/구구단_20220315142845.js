
	while VS do'
	
	
	let num = 0;
	while (num < 11){
		num += 1;
		console.log(num);
	};
	
	while은 num이 11되면 조건에따라 10까지 출력되지만
	do는 num이 11까지 한번 출력되고 중단됨.
	
	// 구구단을 만들어봐
	
let i = 2;
let j = 1;

	while (i < 10){
		while(j < 10){
			document.write(`${i} * ${j} = ${i*j} <br>`);
			j++;
		}
		i++;
		j = 1;
	}




	const num = 2;
	let result = "";

	for(let i =0; i < 10; i++){
		
		result= result + num * (i + 1)+ ' ';

	}

	console.log(result);