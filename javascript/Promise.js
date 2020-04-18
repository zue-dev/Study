import React from "./node_modules/react";

function increase(n, callback) {
  setTimeout(() => {
    const print = n + 1;
    console.log(print);
    if (callback) {
      callback(print);
    }
  }, 1000);
}

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

function PromiseSample() {
  return <div>난 콘솔만 보고싶어</div>;
}

export default PromiseSample;
