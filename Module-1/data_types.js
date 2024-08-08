/**
  DataType
  Primitive : String , NUmber, Boolean, Null, Undefined
  Non-Primitive : Reference Variable ( Object, Array, Function )// also called it reference type variable
 * 
 * 
 * 
 */
// primitive data type example
let a = 5;
let b = a;
b = 10;
console.log("a", a);
console.log("b", b);
// reference is not duplicated

let nums1 = [1, 2, 3, 4, 5];
let nums2 = nums1;
nums2.push(6);
console.log("nums1", nums1);
console.log("nums2", nums2);
// here reference is duplicated
// Here example 2
let obj1 = { name: "John" };
let obj2 = obj1;
obj2.name = "Doe";
console.log("obj1", obj1);
console.log("obj2", obj2);
// here reference is duplicated