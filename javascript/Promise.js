function increase(n, callback) {
  setTimeout(() => {
    const print = n + 1;
    console.log(print);
    if (callback) {
      callback(print);
    }
  }, 1000);
}

// 콜백지옥..
increase(0, n => {
  increase(n, n => {
    increase(n, n => {
      increase(n, n => {
        increase(n, n => {
          console.log("not promise 끝!");
        });
      });
    });
  });
});

function usingPromise(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const val = n + 1;

      // reject action
      if (val === 5) {
        const err = new Error();
        err.name = "value is 5";
        reject(err);
        return;
      }

      // resolve action
      console.log(val);
      resolve(val);
    }, 1000);
  });
}

usingPromise(0)
  .then(usingPromise)
  .then(usingPromise)
  .then(usingPromise)
  .then(usingPromise)
  .then(usingPromise)
  .catch(e => {
    console.error(e);
  });
