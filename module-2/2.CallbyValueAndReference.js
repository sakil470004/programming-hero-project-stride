// call by value and call by reference
// function call with primitive type data    => call by value => number, string, boolean, undefined, null, symbol
// function call with non-primitive data=> call by reference => object, array, function

let a = 5;
let b = a; //5 //   call by value
b = 6;
const arr = [1, 2, 3, 4, 5];
console.log("Call by value");
console.log("a", a); //5
console.log("b", b); //6

// call by value
// it don;t change the value of global variable
function show(number) {
  number = number - 1;
  console.log("from function a", number);
}
show(a);

console.log("from global a", a);

console.log("Call by reference");
console.log("From global 1st time arr", arr);

// it change the value of global variable
function showArr(arr) {
  arr.push(6);
  console.log("from function arr", arr);
}
showArr(arr);
console.log("From global 2nd time arr", arr);