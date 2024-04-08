// An object cannot store only key or only pair, it has to store both
// Not every kind of object can be converted into an array.

let info = [
    ["name","nitan"],
    ["age",29],
    ["isMarried", true],
];

let objInfo = Object.fromEntries(info); //fromEntries keyword.
console.log(objInfo);