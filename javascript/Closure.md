# 클로저(Closure) 함수

## Reference

https://hyunseob.github.io/2016/08/30/javascript-closure

---

## 개념

---

클로저 안에 정의된 함수는 만들어진 환경을 기억한다.

```js
const base = "Hello, ";

function sayHello(name) {
  const text = base + name;

  return function () {
    console.log(text);
  };
}

const hello1 = sayHello("주혜");
const hello2 = sayHello("지혜");
const hello3 = sayHello("주해");

hello1(); // 주혜
hello2(); // 지혜
hello3(); // 주해
```

text라는 변수 자체가 여러번 생성된 것이다.  
hello1, hello2, hello3은 서로 다른 환경을 가지고 있다.  
환경을 기억하기 때문에 메모리가 소모된다. 사용이 끝나면 꼭 참조를 제거하자!

```js
hello1 = null;
hello2 = null;
hello3 = null;
```

## 은닉화

자바스크립트의 객체지향 프로그래밍은 Prototype을 통해 객체를 다루는 것이다.  
문제는 Private variables에 접근 권한 문제.

```js
// 접근 가능 예시

function hello(name) {
  this._name = name;
}

const hello1 = new hello();
hello1._name = "abc"; // 밖에서 접근 가능
```

```js
//클로저로 접근 막기

function hello(name) {
  var _name = name;

  return function () {
    console.log(_name);
  };
}

// 밖에서 접근 불가능!
```
