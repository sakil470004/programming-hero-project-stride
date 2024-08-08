// Asynce await

const taskOne = () => {
  return new Promise((resolve, reject) => {
    resolve("Task 1 is completed");
  });
};

const taskTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Task 2 is rejected");
    }, 3000);
  });
};
const taskThree = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 3 is completed");
    }, 2000);
  });
  // console.log(taskOne());
  // console.log(taskTwo());
  // console.log(taskThree());
};
async function show() {
  try {
    const t1 = await taskOne();
    console.log(t1);
    const t2 = await taskTwo();
    console.log(t2);
    const t3 = await taskThree();
    console.log(t3);
  } catch (error) {
    console.log(error);
  }
}
show();
// Above code will not wait for taskOne, taskTwo and taskThree to complete. It will execute all the promises at the same time. To make it wait for the promises to complete we can use async await.

// Asynce await is a new way to write asynchronous code. It is built on top of promises, so it is non-blocking. It makes the code look like it is synchronous, but it is not. It is syntactic sugar on top of promises. It is a way to write asynchronous code that is easier to read and write.
