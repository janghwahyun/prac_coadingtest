function solution(answers) {
    
    var answer = [];
    let one = [1, 2, 3, 4, 5];
    let two = [2, 1, 2, 3, 2, 4, 2, 5];
    let tree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    // 문제 맞힌 개수
    let count = [0, 0, 0];

    for(let i = 0; i<answers.length; i++){
        if(answers[i] === one[i]){
            count[0]++;
            
        }if(answers[i] === two[i]){
            count[1]++;
            
        }if(answers[i] === tree[i]){
            count[2]++;
        }
    }
    
    const max = Math.max(...count);
    
    // count의 최대값과 같다면 answer의 넣어주기
    for(let i=0; i<count.length; i++){
        if( max === count[i]){
            answer.push(i+1);
            console.log(answer);
        }
    }
    
    return answer.sort();
}

===========> 타임 에러

function solution(answers) {
    
    var answer = [];
    let one = [1, 2, 3, 4, 5];
    let two = [2, 1, 2, 3, 2, 4, 2, 5];
    let tree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    // 문제 맞힌 개수
    let count = [0, 0, 0];

    for(let i = 0; i<answers.length; i++){
        one[i % 5] === answers[i] ? count[0]++ : null;
        two[i % 8] === answers[i] ? count[1]++ : null;
        tree[i % 10] === answers[i] ? count[2]++ : null;
    }
    console.log(count);
    
    const max = Math.max(...count);
    
    // count의 최대값과 같다면 answer의 넣어주기
    for(let i=0; i<count.length; i++){
        if( max === count[i]){
            answer.push(i+1);
            console.log(answer);
        }
    }
    
    return answer.sort();
}
