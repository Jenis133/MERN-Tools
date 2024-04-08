/* 
syntax
execution
uses
*/

/* 
   Output will be true if one the input return true.
   Use case is to check if an element is included in an array. 
*/

let ar1 = ["nitan","ram","hari"];
let hasNitan = ar1.some((value, i) => { // checks if the element is there in an array or not. By default it's false.
    if (value === "nitan") {
        return true;
    }
    else {
        return false;
    }
});
console.log(hasNitan);
console.log();

// check whether a person has smoking habit from the array list. ["drinking","smoking","vaping"];
let ar2 = ["drinking","smoking","vaping"];
let habit = ar2.some((value,i) => {
    if(value === "smoking") {
        return true;
    }
});
console.log(habit);
console.log();

// check whether a person has drinking habit from the string "drinking smoking vaping";
let ar3 = "drinking smoking vaping";
let stringHabit = ar3.split(" ").some((value,i) => { // convert string to array first and then use some method.
    if(value === "drinking") {
        return true;
    }
});
console.log(stringHabit);
console.log();

