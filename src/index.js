const a = { a: 1, b: 2 };

const b = { ...a, c: 3 };

const promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('foo');
  }, 300);
});

promise1.then(function (value) {
  console.log(value);
  // expected output: "foo"
});

console.log(promise1);

console.log(b);
