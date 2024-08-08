const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const nums2=nums;
const nums2 = [...nums];
nums2.push(10);
console.log("nums", nums);
console.log("nums2", nums2);
const num = [1, 2, 3, 4, 5];
// const num1=nums[0];
// const num2=nums[1];

const [num1, num2, ...rest] = nums;
console.log("num1", num1);
console.log("num2", num2);
console.log("rest", rest);

console.log("object example");
const person1 = {
  name: "Sakil",
  age: 25,
  city: "Dhaka",
};
// const person2=person1;
const person2 = {
  ...person1,
  age: 30,
};
console.log("person1", person1);
console.log("person2", person2);

person2.isMarried = true;
person2.name="Mynul";
console.log("person1", person1);
console.log("person2", person2);

// spread operator is used to duplicate the reference of the object
const {name,age,...restValue}=person2;
console.log("name",name);
console.log("age",age);
console.log("restValue",restValue);
// what is rest operator ?
// rest operator is used to get the rest of the values from the array or object
// example
// const [num1,num2,...rest]=nums;
