let ar1 = ["a", "b"];
let ar2 = ["x", "y", "z"];

let ar3 = [1, 2, ...ar2, 5, ...ar1]; //[1,2,"x","y","z",5,"a","b"]
console.log(ar3);

// ["a","b","x","y","x"]

// ... (spread operator) are wrapper opener
//spread operator are used to make new array from the existing array
