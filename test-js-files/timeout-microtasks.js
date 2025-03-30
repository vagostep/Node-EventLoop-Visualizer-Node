const promise = new Promise((resolve) => {
  console.log('inside promise')
  resolve();
})
setTimeout(() => {
  console.log('log 1');
  promise.then(() => {
    console.log('promise 1');
  });
}, 0);
setTimeout(() => {
  console.log('log 2');
  promise.then(() => {
    console.log('promise 2');
  });
}, 0);
setTimeout(() => {
  console.log('log 3');
  promise.then(() => {
    console.log('promise 3');
  });
}, 0);
setTimeout(() => {
  console.log('log 4');
  promise.then(() => {
    console.log('promise 4');
  });
}, 0);