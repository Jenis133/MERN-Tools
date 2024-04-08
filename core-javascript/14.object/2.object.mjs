// Conversion of objects into arrays of multiple types

let info = {
    name: "nitan",
    age: 29,
    isMarried : false,
};

let keysArray = Object.keys(info) //[ "name", "age", "isMarried"] Array of keys
console.log(keysArray);
console.log();
let valueArray = Object.values(info) //[ "nitan", "29", "false"] Array of values
console.log(valueArray);
console.log();
let entriesArray = Object.entries(info) //[ [ 'name', 'nitan' ], [ 'age', 29 ], [ 'isMarried', false ] ] // Array of properties
console.log(entriesArray)
console.log();



