let arr1 = ["a","b","c","d","e"];
//          0   1   2   3   4
//         -5  -4  -3  -2  -1
let lastMember = arr1.at(-1); // at method
console.log(lastMember);
console.log();
console.log(arr1[3]); // calling a specific element of an array
console.log();
console.log(arr1[-2]); // minus is not allowed unless at method is used, therefore undefined

// at method is used to find the last element of an array