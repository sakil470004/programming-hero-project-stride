// function syntax
function functionName(parms1,params2) {
    // code block
}
function add(a,b) {
    return a+b;
}
const result = add(5,6);
console.log(result);

// function expression arroow function
const add2 = (num1,num2) => num1+num2;
const result2 = add2(5,6);
console.log(result2);

// use of this keyword
// this keyword in global context
let user={
    age: 20,
    getAge: function(){
        console.log("normal FN",this.age);
    },
    getDetails: ()=>{
        console.log("Arrow FN",this.age);
    }
}
const result3 = user.getAge();
const result4 = user.getDetails();

// access before declaration in function

test();
function test(){
    var a = 10;
    console.log('Normal FN a',a);
}
// access before declaration in arrow function
// test2();
const test2 = () =>{
    var b = 10;
    console.log('arrow b',b);
}