// syntax, execution and usage

let ar1 = ["s","u","r","e","n"];

//             s       0
ar1.forEach((value , index) => { // this function will run a loop until all elements and their indexes are displayed.
    console.log(value,index);
});
console.log();

ar1.forEach((value, index) => {
    console.log(`${value}am`); // calling an element inside a ``;
})
