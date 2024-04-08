console.log(); // Just a blank line

let names = [`Sid`,`Sanjeev`,`Suren`, 29, false];
//             0       1        2       Array indexing
// Array in Js is used to store data of different type or same type.
// Retrieving all elements
console.log(names);
console.log();
// Retrieving specific elements
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log();
// Changing element of array
names[1] = `Hari`; // assign a new value to index 1 of names array.
console.log(names);
console.log();
console.log(`First index: ${names[0]} and Second index: ${names[1]}`);