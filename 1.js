function solution(progresses, speeds) {
  var answer = [];

  // 각 작업은 배포까지 몇일이 걸리는가?
  const endCountArray = [];

  progresses.forEach((workload, i) => {
    const endCount = Math.ceil((100 - workload) / speeds[i]);
    endCountArray.push(endCount);
  });

  // 첫번째 작업이 0이 되는 값만큼 모든 작업에 - 해준다.
  while (endCountArray.length > 0) {
    const minusCount = endCountArray[0];
    for (let i = 0; i < endCountArray.length; i++) {
      endCountArray[i] -= minusCount;
    }

    if (endCountArray[0] === 0) {
      let releaseCount = 0;
      while (endCountArray[1] <= 0) {
        releaseCount++;
        endCountArray.shift();
      }
      releaseCount++;
      answer.push(releaseCount);
      endCountArray.shift();
    }
  }

  return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));