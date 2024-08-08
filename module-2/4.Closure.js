//  Closure
// Pre Requisite: Variable lifetime in a function
// Closure is a function that has access to the outer function's scope in which it was created even after the outer function has finished executing.
// It make reference to the variables from the outer scope and store them in its own scope.
function sayHello() {
  const text = "Hello, World!";
  return function () {
    console.log(text);
  };
}
sayHello()();

function inner(){
  const text = "Hello, World! 2";
  console.log("inner function called")
  return function () {
    console.log(text);
    console.log("text is accessible even after inner function is called")
  };
}
const innerFunction = inner();// inner function is called and it returns a function
innerFunction();// inner function is called but this time returned function is called