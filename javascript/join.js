/**
 * Array.prototype.join()
 * toString() 메소드와 같지만 다른 점은 인덱스 사이마다 원하는 문자열을 추가할 수 있다.
 * 잘 안 써서 존재만 알고 사용할 줄 몰랐던 메소드..!
 */
const stringsInArray = ["아버지가", "방에", "들어가신다."];
stringsInArray.toString(); // '아버지가,방에,들어가신다.'
stringsInArray.join(); // '아버지가,방에,들어가신다.'
stringsInArray.join(""); // 아버지가방에들어가신다.
stringsInArray.join(" "); // 아버지가 방에 들어가신다.
