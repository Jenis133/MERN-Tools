// [1,2,3] = [11,12,13];
let ar1 = [1,2,3];
//                   1      0
let ar2 = ar1.map((value, i) => {
    return value + 10; // Adding the value with 10.
})
console.log (ar2);