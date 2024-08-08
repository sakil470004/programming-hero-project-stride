// scope
// 1. Global Scope
// 2. Local Scope
// 3. Block Scope or function scope
const usrName = "Md. Tazri";

function show() {
  const usrName = "Md. Tazri Hossain";
  const usrName2 = "Md. Tazri Hossain 2";
  console.log("from function", usrName);
  console.log("from function", usrName2);
  function inner() {
    const usrName2 = "Md. Tazri inner";
    console.log("From inner", usrName2);
  }
  inner();
}

// console.log("from global",usrName2)
// cannot access usrName2 from global scope

show();
console.log("From global", usrName);
