// function is value type and function is reference type
//value:    string, number, boolean, undefined, null, symbol
// Function Can be -> variable, pass as argument, return from function -> that's why it is called it variable;

// variable
const add = function (a, b) {
  return a + b;
};
add(5, 6);

// pass as argument
function show(callback) {
  callback();
}
const show2 = function () {
  console.log("Hello from show2");
};
show(show2);

// return from function
function show3() {
  return function () {
    console.log("Hello from show3");
  };
}
// show3();// cannot show anything because it return a function but we need to call it agin
// show3()();//it ok
const show4 = show3();
show4(); //do the same job as show3()()

// Higher order function
// 1.Accepts a function as an parameter
// 2.Returns a function
// 3.Can do both
console.log("Higher order function");
function higherOrder(callback) {
  console.log("From higher order");
  callback();
  return function () {
    console.log("From higher order return");
  };
}
higherOrder(function () {
  console.log("From callback");
});
// const show5 = higherOrder(function () {
//   console.log("From callback");
// });
// show5();//same work as above
// Some real life example of higher order function
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const square = numbers.map(function (number) {
//   return number * number;
// });
const square = numbers.map((x) => x * x); //work same as above
console.log("Numbers", numbers);
console.log("Square", square);

// Some real life example of higher order function
// 1. setTimeout
// 2. setInterval
// 3. addEventListener
// 4. fetch
// 5. filter, map, reduce, sort, find, forEach
// 6. Promise
// 7. async await
// 8. call back function
// 9. Event Listener

// summary about function
// 1. A function can be stored in a variable
// 2. A function can be stored in an array
// 3. A function can be stored in an object
// 4. We can create a function as need
// 5. We can pass a function as an argument
// 6. We can return a function from another function
// 7. We can call a function from another function
// 8. We can pass a function as an argument and return a function from another function
