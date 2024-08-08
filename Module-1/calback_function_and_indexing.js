function show(name) {
  console.log(`Hello ${name}`);
}
function firstFunciton(name, age, callback) {
  console.log(`Hello ${name} your age is ${age}`);

  setTimeout(() => {
    console.log("I am from setTimeout for 3 sec");
    callback(name);
  }, 3000);
}
firstFunciton("Sakil", 25, show);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

nums.map((num, index) => {
  console.log("num", num, "index", index);
});
