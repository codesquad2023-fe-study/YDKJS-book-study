// B.2 클로저 연습하기
// range 함수는 두 개의 숫자 인자를 받는다.
// 두 숫자는 각각 원하는 범위의 시작과 끝을 나타낸다.
// 두 번째 인자가 없는 경우에는 두 번째 인자를 넘길 수 있도록 하는 함수가 반환되어야 한다.
const countRange = (num1, num2) => {
  const answer = [];
  if (num2 === 0) return answer;

  for (let i = num1; i <= num2; i++) {
    answer.push(i);
  }

  return answer;
};

const range = (start, end) => {
  return end !== undefined
    ? countRange(start, end)
    : (end) => {
        return countRange(start, end);
      };
};

console.log(range(3, 3)); // [3]
console.log(range(3, 8)); // [3,4,5,6,7,8]
console.log(range(3, 0)); // []

const start3 = range(3);
const start4 = range(4);

console.log(start3(3)); // [3]
console.log(start3(8)); // [3,4,5,6,7,8]
console.log(start3(0)); // []

console.log(start4(6)); // [4,5,6]
