// Conversion of array to string

// ["my", "name", "is", "sid"] => my name is sid

let ar = ["my", "name", "is", "sid"];
let arStr = ar.join(" "); // join converts an array into string, pass space (" ") as an argument.
console.log(arStr);
console.log();
arStr = ar.join("*"); // join converts an array into string, pass string ("*") as an argument.
console.log(arStr);