function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function makeError() {
  await sleep(2000);
  const err = new Error();
  throw err;
}

async function process() {
  try {
    await makeError();
  } catch (e) {
    console.log(e);
  }
}

process();

// 함수에서 async를 사용하면 결과값으로 Promise를 반환!
// async/await 에서 에러 발생은 throw, 에러 잡아낼 땐 try/catch 사용

/** ******************************************************* */

function deepSleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
  await deepSleep(2000);
  return "멍멍이";
};

const getCat = async () => {
  await deepSleep(3000);
  return "야옹이";
};

const getMouse = async () => {
  await deepSleep(5000);
  return "찍찍이";
};

// 순차적으로 실행
async function inOrder() {
  const dog = await getDog();
  console.log(dog);

  const cat = await getCat();
  console.log(cat);

  const mouse = await getMouse();
  console.log(mouse);
}

// 일괄 실행, Promise.all 의 경우 하나라도 실패하면 모두 실패한 것으로 간주.
async function inBatch() {
  const batch = await Promise.all([getDog(), getCat(), getMouse()]);
  console.log(batch);
}

// 제일 빨리 끝난 것 하나만 실행
async function raceAction() {
  const result = await Promise.race([getDog(), getCat(), getMouse()]);
  console.log(result);
}

inOrder();

inBatch();

raceAction();
