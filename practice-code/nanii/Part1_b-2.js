// 두번째 인자가 없으면 두번째 인자를 넘길 수 있는 함수 반환
// 매개변수는 각각 원하는 범위의 시작과 끝을 나타냄
function range(start, end) {
  if (end === undefined) {
    return (end) => range(start, end);
  }
  return Array.from({ length: end - start + 1 }, (_, i) => i + start);
}

console.log(range(3, 3)); // [3]
console.log(range(3, 8)); // [3,4,5,6,7,8]
console.log(range(3, 0)); // []

var start3 = range(3);
var start4 = range(4);

console.log(start3(3)); // [3]
console.log(start3(8)); // [3,4,5,6,7,8]
console.log(start3(0)); // []

console.log(start4(6)); // 4,5,6
