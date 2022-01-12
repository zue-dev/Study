/**
 * Equality comparison
 *
 * = 또는 ===를 사용하여 자바스크립트에서 두 배열을 비교하면
 * 두 배열이 같은 순서로 동일한 요소를 포함하더라도 false가 자주 발생합니다.
 * 이는 배열과 객체가 값이 아닌 참조로 비교되기 때문입니다.
 */
const a = [1, 2, 3];
const b = [1, 2, 3];
a === b; // false

/**
 * JSON.stringify
 *
 * 짧고 쉽게 이해할 수 있는 솔루션처럼 보이지만
 * 다른 값의 직렬화된 문자열이 동일한 일부 극단적인 경우에는 부족합니다.
 */
const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

const a = [1, 2, 3];
const b = [1, 2, 3];

equals(a, b); // true

// 이 솔루션이 대부분의 사용 서례에 권장되지 않는 이유
const str = "a";
const strObj = new String("a");
str === strObj; // false
equals([str], [strObj]); //true, should be false

null === undefined; // false
equals([null], [undefined]); // true, should be false

/**
 * 더 나은 방법
 *
 * 더 나은 접근 방식은 두 배열을 비교하고 두 배열의 값을 비교하는 데
 * length와 Array.prototype.every() 를 사용하는 것입니다.
 * 이 접근 방식은 위에서 설명한 직렬화 문제를 방지합니다.
 * 그러나 재귀적으로 확인해야 하는 중첩된 배열이나 객체는 고려하지 않습니다.
 */
const equals = (a, b) => {
  return a.length === b.length && a.every((v, i) => v === b[i]);
};

const a = [1, 2, 3];
const b = [1, 2, 3];
const str = "a";
const strObj = new String("a");

equals(a, b); // true
equals([str], [strObj]); // false
equals([null], [undefined]); // false

/**
 * 비순차적 비교
 *
 * 마지막으로 각 배열의 요소 순서가 중요하지 않고
 * 두 배열에 존재하는 동일한 값에만 관심이 있는 경우가 있습니다.
 * 이러한 경우 Set 및 Array.prototype.filter() 루프와 함께 사용하여
 * 고유한 값을 반복하고 각 값이 각 배열에서 동일한 횟수만큼 나타나는지 확인할 수 있습니다.
 */
const equalsIgnoreOrder = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }

  const uniqueValues = new Set([...a, ...b]);

  for (const v of uniqueValues) {
    const aCount = a.filter((e) => e === v).length;
    const bCount = b.filter((e) => e === v).length;

    if (aCount !== bCount) {
      return false;
    }
  }

  return true;
};
