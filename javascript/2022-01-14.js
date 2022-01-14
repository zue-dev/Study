/**
 * Array.prototype.map()
 *
 * 원래 배열의 각 요소에 제공된 변환을 적용하여 새 배열을 만듭니다.
 * 결과는 원래 배열과 길이가 같은 변환된 요소입니다.
 */
const arr = [1, 2, 3];
const double = (x) => x * 2;
arr.map(double); // [2, 4, 6]

/**
 * Array.prototype.filter()
 *
 * true 필터링 함수를 사용하여 해당 함수를 기반으로
 * 반환되는 요소만 유지하여 새 배열을 만듭니다.
 * 결과는 원래 배열과 동일한 요소의 하위집합을 포함하는
 * 원래 배열의 길이보다 같거나 작은 배열입니다.
 */
const arr = [1, 2, 3];
const idOdd = (x) => x % 2 === 1;
arr.filter(idOdd); // [1, 3]

/**
 * Array.prototype.reduce()
 *
 * 초기 값에 따라 모든 유형의 출력 값을 생성합니다.
 * 결과는 제공된 리듀서 함수를 기반으로
 * 정수, 객체 또는 배열과 같은 모든 유형이 될 수 있습니다.
 */
const arr = [1, 2, 3];
const sum = (x, y) => x + y;
arr.reduce(sum, 0); // 6

const increment = (x, y) => [...x, x[x.length - 1] + y];
arr.reduce(increment, [0]); // [0, 1, 3, 6]

/**
 * Array.prototype.find()
 *
 * matcher 함수가 반환하는 첫 번째 true 요소를 반환합니다.
 * 결과는 원래 배열의 단일 요소입니다.
 */
const arr = [1, 2, 3];
const idOdd = (x) => x % 2 === 1;
arr.find(idOdd); // 1
