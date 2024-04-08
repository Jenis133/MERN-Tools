// Passing a parameter in a function.
let sum = function(num1, num2) {
    let sum_ = num1 + num2;
    console.log(sum_);
};

sum(1,2);
console.log();

// Find the average of 3 numbers using a function

let average = function (num1, num2, num3) {
    let average_ = (num1 + num2 + num3)/3;
    console.log(`The average is ${average_}`);
};

average (5,6,7);
console.log();

// Find the percentage of 2 numbers using a function
// First is the numerator and second is the denominator i.e x % of y
let percentage = function (num1, num2) {
    let percentage_ = (num1/num2) * 100;
    console.log(`The percentage is ${percentage_}%`);
}

percentage(15,100);
console.log();

// alt + shift + down arrow to duplicate a statement in the next line

// In the below function n4 isn't passed so it's undefined
let fun1 = function (n1, n2, n3, n4) { //parameter
    console.log(n1);
    console.log(n2);
    console.log(n3);
    console.log(n4);
};

let num1 = 1;
let num2 = 10;
let num3 = 15;
fun1 (num1, num2, num3); //argument
console.log();