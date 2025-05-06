// What is hosting?

// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.
// const and let can not access the value before initialization because they are placed in a temporal dead zone. But in var case, it will give undefined. 
// But in function, we get values of function because function values are stored during the memory creation phase so we just get access to it.

console.log(a) //undefined (undefined is datatype not an error) 
var a = 10;
// in javascript engine code excution will done in two phase 1. memory allocation phase 2.code excution phase 
