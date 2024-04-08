// ["my","name","is"] = ["MYN,"NAMEN","ISN"];
let ar1 = ["my","name","is"];
//                   my      0
let ar2 = ar1.map((value, i) => {
    return `${value.toUpperCase()}N`; //converting the string to uppercase and concatenating
})
console.log (ar2);