/* 
Every.
Output will be true if all of the element return true.
*/

let ar1 = [9,10,12,18,30];
let isAllGreaterThan18 = ar1.every((value, i) => {
    if (value > 18) { //Checks if all elements are greater than 18 in the array
        return true;
    }
    else {
        return false;
    }
});
console.log(isAllGreaterThan18);

console.log();

isAllGreaterThan18 = ar1.every((value, i) => {
    if (value > 2) { //Checks if all elements are greater than 2 in the array
        return true;
    }
    else {
        return false;
    }
});
console.log(isAllGreaterThan18);

console.log();

// check we have all even in the list [2,4,9,6]
let ar2 = [2,4,9,6];
let isAllEvenInTheList = ar2.every((value, i) => {
    if (value % 2 === 0) { //Checks if all elements are even in the array
        return true;
    }
    else {
        return false;
    }
});
console.log(isAllEvenInTheList);
console.log();

// check whether all the students get pass marks or not from the list [40,30,80]. Pass marks is 40.
let ar3 = [40,30,80];
let isPassOrNot = ar3.every((value, i) => {
    if (value >= 40) { //Checks if all elements are greater or equal to 40.
        return true;
    }
    else {
        return false;
    }
});
console.log(isPassOrNot);
console.log();
