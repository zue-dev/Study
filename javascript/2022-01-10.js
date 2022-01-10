let str = "Hello";
let copy = str;
copy = "Hi";
// str = 'Hello, copy = 'Hi

let obj = { a: 1, b: 2 };
let objCopy = obj;
objCopy.b = 4;
/**
 * obj = { a: 1 , b: 4 }, objCopy = { a: 1, b: 4 }
 *
 * obj 객체는 참조로 전달되므로 변수 중 하나의 값을 변경하면 다른 변수에도 영향을 준다.
 * ObjCopy는 사실상 동일한 객체를 참조하는 별칭이다.
 * spread 또는 Object.assign({}, ...) 와 같은 기술로 객체를 복사하여 이 문제를 해결할 수 있다.
 */

let obj = { a: 1, b: 2 };
let clone = { ...obj };
clone.b = 4;
// obj = { a: 1, b: 2 }, clone = { a: 1, b: 4 }

let otherClone = Object.assign({}, obj);
otherClone.b = 6;
clone.b = 4;
/**
 * obj = { a: 1, b: 2 }, otherClone = { a: 1, b: 6 }
 *
 * 이 두 솔루션 모두 얕은 복제의 예를 보여준다. 얕은 객체에 대해 작동하지만 중첩된 객체가 있는 경우 실패한다.
 * 중첩된 객체가 있는 경우 JSON.stringify(), JSON.parse()를 이용해 처리한다.
 */

let obj = { a: 1, b: { c: 2 } };
let clone = JSON.parse(JSON.stringify(obj));
clone.b.c = 4;
/**
 * obj = { a: 1, b: { c: 2 } }, cline = { a: 1, b: { c: 4 } }
 *
 * 위의 코드가 작동하는 동안 전체 객체를 직렬화 및 역직렬화 해야하므로 코드 성능에 상당한 영향을 미칠 수 있다.
 * 더 큰 객체나 성능이 중요한 프로젝트에는 적합하지 않을 수 있다.
 */
