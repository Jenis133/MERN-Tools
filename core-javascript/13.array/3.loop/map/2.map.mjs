/*
1. Use map only if input and output are in array.
2. Use map only if input and output array length are equal.

[1,2,3,4] = [2,4,6,8] Yes
[1,2,3,4] = [2,4,6]   No
[1,2,3,4] = "1234"    No
*/
// Find this output [2,4,6,8]
let ar1 = [1,2,3,4];
//                   1      0
let ar2 = ar1.map((value, index) => {
    return value*2; // Multiplying the value with 2.
})
console.log (ar2);


