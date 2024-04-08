// ["my","name","is"] = ["MY0,"NAME1","ISN2"];
let ar1 = ["my","name","is"];
//                   my      0
let ar2 = ar1.map((value, i) => {
    return `${value.toUpperCase()}${i}`; //converting the string to uppercase and concatenating with i
    
})
console.log (ar2);