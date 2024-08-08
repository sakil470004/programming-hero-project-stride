const num1 = 10;
const num2 = 20;
console.log("num1", num1);
console.log("num2", num2);
// if else condition
console.log("if else condition");

if (num1 > num2) {
  console.log("num1 is greater");
} else if (num1 < num2) {
  console.log("num2 is greater");
} else {
  console.log("Both are equal");
}
// ternary operator
const result =
  num1 > num2
    ? "num1 is greater"
    : num1 < num2
    ? "num2 is greater"
    : "Both are equal";

console.log("result", result);

// large example
const score = 25;
console.log("score", score);
console.log("grade");
if (score >= 80) {
  console.log("A+");
} else if (score >= 70) {
  console.log("A");
} else if (score >= 60) {
  console.log("A-");
} else if (score >= 50) {
  console.log("B");
} else if (score >= 40) {
  console.log("C");
} else if (score >= 33) {
  console.log("D");
} else {
  console.log("F");
}

// switch case
console.log("switch case");
console.log("current grade using switch case");
switch (true) {
  case score >= 80:
    console.log("A+");
    break;
  case score >= 70:
    console.log("A");
    break;
  case score >= 60:
    console.log("A-");
    break;
  case score >= 50:
    console.log("B");
    break;
  case score >= 40:
    console.log("C");
    break;
  case score >= 33:
    console.log("D");
    break;
  default:
    console.log("F");
    break;
}
console.log("current grade using switch case reverse order");
switch (true) {
  case score < 33:
    console.log("F");
    break;
  case score < 40:
    console.log("D");
    break;
  case score < 50:
    console.log("C");
    break;
  case score < 60:
    console.log("B");
    break;
  case score < 70:
    console.log("A-");
    break;
  case score < 80:
    console.log("A");
    break;
  default:
    console.log("A+");
    break;
}

const day = "sunday";
console.log("day", day);
console.log("current day");
switch (day) {
  case "sunday":
    console.log("Today is holiday");
    break;
  case "monday":
    console.log("Today is working day");
    break;
  case "tuesday":
    console.log("Today is working day");
    break;
  case "wednesday":
    console.log("Today is working day");
    break;
  case "thursday":
    console.log("Today is working day");
    break;
  case "friday":
    console.log("Today is working day");
    break;
  case "saturday":
    console.log("Today is holiday");
    break;
  default:
    console.log("Invalid day");
    break;
}
console.log("color define using switch case");
const color = "red";
switch (color) {
  case "red":
    console.log("Danger");
    break;
  case "green":
    console.log("Safe");
    break;
  case "orange":
    console.log("Warning");
    break;
  default:
    console.log("Normal");
    break;
}
// ! Most important interview question.
// what is ?? do in js?
// ?? is nullish coalescing operator
// it returns the right-hand operand when the left-hand operand is null or undefined.
// it is used to set default value
// it is used to avoid error
// it is used to avoid undefined
// it is used to avoid null
// example code
let name =[];
const defaultName = name ?? "Sakil";
console.log("defaultName", defaultName);

