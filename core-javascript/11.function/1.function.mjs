/* 
define function
call function
function only executes when called
 */

//function example
let fun1 =  function() {
    console.log("Function called");
};

console.log("First order");

fun1(); //Second order

console.log("Third order");

fun1(); //Fourth order

console.log("Fifth order");
console.log();

//function for arithmetic operation
let fun2 =  function() {
    let a = 1;
    let b = 2;
    console.log(a + b);
};

console.log("First order");

fun2(); //Second order

console.log("Third order");

fun2(); //Fourth order

console.log("Fifth order");
