// &&, ||, !
// &&, true if all are true

console.log(true&&true); //all expressions are true, hence true
console.log(true&&false); //one of the expression is false, hence false
console.log(true&&true&&true); //all expressions are true, hence true
console.log(true&&false&&true); //one of the expression is false, hence false
console.log();

// ||, true if one is true
console.log(true||false); //One of the expression is true, hence true
console.log(false||false); //Both expressions are false, hence false
console.log(true||false||false); //One of the expression is true, hence true
console.log(false||false||false); //All expressions are false, hence false
console.log();

// (!) this expression converts the boolean value to opposite
// So !true would be false and !false would be true
console.log(!true); //false
console.log(!false); //true