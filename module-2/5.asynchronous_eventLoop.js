// JavaScript: Asynchronous ,Event Loop

const num = 5;
console.log("number is", num);
function show() {
  console.log("I am a general function");
}
show();
console.log("I am in the global scope");
function show2() {
  setTimeout(() => {
    console.log("Hay , I am in async function timer 5 seconds");
  }, 5000);
  setTimeout(() => {
    console.log("Hay , I am in async function 2 timer 3 seconds");
  }, 3000);
}
show2();

console.log("I am in the global scope 2 After async function is called");
// Call Stack -> Web API -> Callback Queue -> Event Loop

// What is JavaScript?
// JavaScript is a single-threaded, non-blocking, asynchronous, concurrent language. This means that it has only one call stack and can only do one thing at a time.
// What is asynchronous programming in JavaScript?
// Asynchronous programming is a means of parallel programming in which a unit of work runs separately from the main application thread and notifies the calling thread of its completion, failure or progress.
// What is the Event Loop?
// The Event Loop is a queue of callback functions. When an async function executes, the callback function is pushed into the queue. The JavaScript engine doesn't start processing the event loop until the code after an async function has executed.
