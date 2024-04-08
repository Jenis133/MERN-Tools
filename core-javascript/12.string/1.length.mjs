// String methods in JS.

let nameOne = `Siddhartha`;
console.log(`The character count is ${nameOne.length}`);
console.log();
console.log(`The uppercase is ${nameOne.toUpperCase()}`);
console.log();
console.log(`The lowercase is ${nameOne.toLowerCase()}`);
console.log();

let nameTwo = `   Suren   `;
console.log(nameTwo.trimStart()); // Trims space at the start
console.log(nameTwo.trimEnd()); // Trims space at the end
console.log(nameTwo.trim()); // Trims space from both ends
console.log();

let nameThree = `My name is Sid`;
console.log(nameThree.startsWith(`My n`)); // True if it matches from the start. It's case-sensitive as well.
console.log(nameThree.endsWith(`Sid`)); // True if it matches from the end. It's case-sensitive as well.
console.log();

let nameFour = `My name is Sid`;
console.log(nameFour.replace(`Sid`,`Yngwie`)); // Replace the matching word with the new word.
console.log(nameFour.replace(`n`,`g`)); // Replace method will replace the first match.
console.log(nameFour.replaceAll(`i`,`a`)); // ReplaceAll method will replace all match.
console.log();

// Make a function which calls a trim method
let myTrim = (name) => {
    return name.trim(); // Return method inside the function
}
let _myTrim = myTrim (`  Suren  `);
console.log(_myTrim);