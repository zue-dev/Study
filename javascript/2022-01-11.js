/**
 * Equality comparison
 *
 * 자바스크립트의 배열과 객체는 참조로 비교되기 때문에
 * == 또는 === 을 사용하여 비교할 떄 동일한 것으로 간주되지 않습니다.
 */
const a = { name: "John", age: 26 };
const b = { name: "John", age: 26 };

a === b; // false

/**
 * JSON.stringify
 *
 * 이 문제에 대한 해결책으로 자주 등장합니다.
 * 어떤 상황에서는 유용할 수 있지만 직렬화된 문자열을 비교하는 것은 함정이 있을 수 있습니다.
 */
const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

const a = { name: "John", age: 26 };
const b = { name: "John", age: 26 };

equals(a, b); // true

const c = { name: "John" };
const d = { name: "John", age: undefined };

equals(c, d); // true, should be false

/**
 * Deep equality comparison
 *
 * 재귀를 사용하여 빈 값, 특수 유형 및 중첩과 같은 대부분의 시나리오를 고려하여
 * 두 객체를 심층적으로 비교합니다.
 */
const equals = (a, b) => {
  if (a === b) {
    return true;
  }

  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  if (!a || !b || (typeof a !== "object" && typeof b !== "object")) {
    return a === b;
  }

  if (a.prototype !== b.prototype) {
    return false;
  }

  const keys = Object.keys(a);

  if (keys.length !== Object.keys(b).length) {
    return false;
  }

  return keys.every((k) => equals(a[k], b[k]));
};

const a = { name: "John", age: 26 };
const b = { name: "John", age: 26 };

equals(a, b); // true

const c = { name: "John" };
const d = { name: "John", age: undefined };

equals(c, d); // false
