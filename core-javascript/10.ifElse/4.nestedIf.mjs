// nested loop example
let a = true;
let b = true;

if (a === true) {
    if (b === false) {
        console.log("a is true");
    }
    else {
        console.log("none")
    }
}

if (b === true) {
    if (a === true) {
        console.log("b is true");
    }
    else {
        console.log("none")
    }
}