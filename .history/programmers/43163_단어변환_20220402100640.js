function solution(begin, target, words) {
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
