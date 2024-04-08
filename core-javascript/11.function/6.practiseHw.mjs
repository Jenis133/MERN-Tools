//Extra Stuff
console.log();
console.log(`** Function Practice Assignments **`);
console.log(`---------------------------------------------`);
console.log();

// a) make a function name is18 pass a value ,the function must return true if the given age is 18 otherwise return false
let is18 = function (age){
    if (age===18) {
        return `a) ` + true;
    }
    else {
        return `a) ` + false;
    }
};
let resultOne = is18(18);
console.log(resultOne);
console.log();


/*b) make a function named isGreaterThan18 , pass a value , the function must return true if the given age is 
greater or equals to 18 otherwise false*/
let isGreaterThan18 = function (age) {
    if (age>=18) {
        return `b) ` + true;
    }
    else {
        return `b) ` + false;
    }
};
let resultTwo = isGreaterThan18(18);
console.log(resultTwo);
console.log();


/*c) make a function that take a number and return you can enter room only if the enter number is less than 18
 else you can not enter*/
 let room = function (age) {
    if (age<18) {
        return `c) You can enter the room`;
    }
    else {
        return `c) You cannot enter the room`;
    }
 };
 let resultThree = room(17);
 console.log(resultThree);
 console.log();


 /* d) make a function named isEven , pass a value, that return true if the given number is even else return false*/
let isEven = function(num) {
    if(num % 2 === 0) { //Use modulus to determine if the remainder is 0 (odd) or even (1);
        return  `d) ` + true;
    }
    else {
        return  `d) ` + false;
    }
};
let resultFour = isEven(100);
console.log(resultFour);
console.log();


/*e) make a function that takes 3 input as number and return average of given number*/
let inputOne = function(num1,num2,num3) {
    let average = (num1+num2+num3) / 3;
    return average;
};
let _average = inputOne(2,3,4);
console.log(`e) The average is ${_average}`);
console.log();


/*f) make a function that takes one input as number and return "category1" for number range from 1 to 10,
return "category2" for number range from 11 to 20, return "category3" for number range form 21 to 30*/
let inputTwo = function(num) {
    if (num >=1 && num<=10) {
        return `f) Category 1`;
    }
    else if (num >=11 && num <=20 ) {
        return `f) Category 2`;
    }
    else if (num >=21 && num <=30 ) {
        return `f) Category 3`;
    }
    else {
        return `f) None`;
    }
};
let category = inputTwo(21);
console.log(category);
console.log();


/*g) make a function that takes a input as number that perform
     if age [upto 17],  return your ticket is free
     if age[18 to 25], return  your ticket cost 100
     if age[>26], return your ticket cost 200
     if age===26 return your ticket is 150
*/
let inputThree = function(age) {
    if (age>=1 && age<=17) {
        return `g) Your ticket is free`;
    }
    else if (age>=18 && age<=25) {
        return `g) Your ticket cost is 100`;
    }
    else if (age===26) {
        return `g) Your ticket cost is 150`;
    }
    else if (age>=27 && age<=150) {
        return `g) Your ticket cost is 200`;
    }
    else {
        return `g) None`;
    }
};
let ticketPrice = inputThree(26);
console.log(ticketPrice);
console.log();


/*h) make a function that take a number
     if number>=3 console i am greater or equal to 3
     if number ===3 console i am 3
     if number<3 console i am less than3
     else show i am other */
let inputFour = function(num) {
    if (num===3) {     
        return `h) (With return) I am equal to 3`;
    }
    else if (num>=3) {
        return `h) (With return) I am greater or equal to 3`;
    }
    else if (num<3) {
        return `h) (With return) I am less than 3`;
    }
    else {
        return `h) (With return) I am other`;
    }
};
let resultFive = inputFour(4);
console.log(resultFive);
console.log();

let inputFive = function(num) {
    if (num===3) {   
        console.log(`h) (Without return) I am equal to 3`);
    }
    else if (num>=3) {
        console.log(`h) (Without return) I am greater or equal to 3`);
    }
    else if (num<3) {
        console.log(`h) (Without return) I am less than 3`);
    }
    else {
        console.log(`h) (Without return) I am other`);
    }
};
inputFive(4);
console.log();


/*i) make a function that takes input as number and return output.
You can watch movies if input is greater or equal to 18 else return "You are not authorized to watch movies */
let inputSix = function(num) {
    if (num>=18) {
        return `i) You can watch movies`;
    }
    else if(num>=1 && num <=17) {
        return `i) You are not authorized to watch movies`;
    }
    else {
        return `i) None`;
    }
};
let resultSix = inputSix(18);
console.log(resultSix);


//Extra Stuff
console.log();
console.log(`---------------------------------------------`);
console.log(`Task is complete. Thank you for reviewing. 🤓`);
console.log(`---------------------------------------------`);

//Exit from nodejs
function exitOnAnyKey() {
    process.stdin.on("data", () => {
        process.exit()
        }
    )
};
console.log("Press any key to exit...")
console.log();

exitOnAnyKey()