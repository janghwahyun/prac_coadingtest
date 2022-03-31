// 두 가지 모두 동일한 풀이이다.

// key로 이름을, value로 참가 인원수를 저장한다.

// 그리고, 완주자 배열을 반복시켜 value를 1씩 감소시킨다.

// value가 1 이상이면 완주하지 못한 인원이므로 return 한다.

function solution(participant, completion) {
  let hashed = [];
  participant.forEach(entry => {
    hashed[entry] = hashed[entry] ? hashed[entry] + 1 : 1;
  });
  completion.forEach(entry => {
    hashed[entry] = hashed[entry] - 1;
  });

  for (var key in hashed) {
    if (hashed[key] >= 1) return key;
  }
}

function solution(participant, completion) {
  const myMap = new Map();

  for (const participant of participants) {
    if (!myMap.get(participant)) {
      myMap.set(participant, 1);
    } else {
      myMap.set(participant, myMap.get(participant) + 1);
    }
  }

  for (const completion of completions) {
    if (myMap.get(completion)) {
      myMap.set(completion, myMap.get(completion) - 1);
    }
  }

  for (const participant of participants) {
    if (myMap.get(participant) && myMap.get(participant) >= 1) {
      answer = participant;
    }
  }
}
