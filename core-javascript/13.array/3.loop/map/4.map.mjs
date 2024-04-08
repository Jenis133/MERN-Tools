// ["my","name","is"] = ["MY,"NAME","IS"];
let ar1 = ["my","name","is"];
//                   my      0
let ar2 = ar1.map((value, i) => {
    return value.toUpperCase(); //converting the string to uppercase
})
console.log (ar2);