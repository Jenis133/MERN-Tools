// joining two arrays

let ar1 = ["a","b"];
let ar2 = ["x","y","z"];

let ar3 = [1,2, ...ar1, 4,5];  // [[ 1, 2, 'a', 'b', 4, 5 ]
let ar4 = [6,7, ...ar2, 8];    // [ 6, 7, 'x', 'y', 'z', 8 ]
console.log(ar3, typeof ar3);
console.log(ar4, typeof ar3);

// ...(spread operator) are wrapper openers
// spread operator are used to make new array from the existing array