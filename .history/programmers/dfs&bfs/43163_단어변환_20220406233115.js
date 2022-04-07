//내가 푼 풀이

function solution(begin, target, words) {
  var answer = 0;
  if (false == words.includes(t)) {
    return 0;
  }
  console.log(false == words.includes(t));

  function dfs(begin, target, words, i) {
    // hit 철자와 비교해보고 words의 철자중 하나라도 틀린게 있으면 words로 바꿔주는 걸 반복
    //결론은 target이 나오겠지
    let a = begin.split('');
    let w = words[i].split('');
    let t = target;

    if (true == words.includes(t)) {
      for (let i = 0; i < words.length; i++) {
        if (a[i] !== w[words.length][i]) {
          a.push(w[words.length]);
          answer++;
          return;
        }
      }
    }
    if (false == words.includes(t)) {
      return 0;
    }
  }
  dfs(begin, target, words, 0);
  return answer;
}

// 다른풀이

function solution(begin, target, words) {
  //words 안에 target이 없다면 걍 0으로 출력 (조건에 있잖아)
  if (!words.includes(target)) return 0;

  function bfs(word, count) {
    let visited = [];
    let queue = [];

    queue.push([word, count]);

    while (queue.length) {
      // queue에 단어가 존재할 때까지 반복한다
      let [currentWord, count] = queue.shift();

      if (currentWord === target) {
        return count;
      }

      words.forEach(word => {
        let changeable = 0;

        if (visited.includes(word)) return; // 검사한 단어는 다시 검사하지 않음

        for (let i = 0; i < word.length; i++) {
          // 전환 가능한 단어인지 확인
          if (word[i] !== currentWord[i]) changeable++;
        }

        if (changeable === 1) {
          // 전환 가능한 단어인 경우
          queue.push([word, ++count]); // 전환 가능한 모든 단어를 queue에 push한다.
          visited.push(word); // 검사한 단어는 visited에 push한다.
        }
      });
    }
  }

  return bfs(begin, 0);
}
