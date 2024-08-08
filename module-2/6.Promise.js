// Promise is a JavaScript object for asynchronous operation.
console.log("Promise Start");
const myPromise = new Promise((resolve, reject) => {
  const number = 10;
  console.log("Inside Promise");
  if (number === 5) {
    resolve(`Number is 5`);
  } else {
    reject(`Number is not 5`);
  }
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });
console.log("Promise Creation Finished");

const promise1 = new Promise((resolve, reject) => {
  console.log("Promise 1 is created");
  setTimeout(() => {
    console.log("Promise 1 inside setTimeout");
    resolve("Promise 1 is resolved");
  }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
  console.log("Promise 2 is created");
  setTimeout(() => {
    console.log("Promise 2 inside setTimeout");
    resolve("Promise 2 is resolved");
  }, 2000);
});
Promise.all([promise1, promise2])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
// It will take 3 seconds to resolve both promises
// What is Promise
// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer
