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


const asyncPrueba = async () => {

  const fetching = await fetch('https://swapi.co/api/people/1');
  const data = await fetching.json();
  const result = JSON.stringify(data);
  return result;

};

const consoleContext = (result) => console.log(result)

asyncPrueba()
  .then(consoleContext);
