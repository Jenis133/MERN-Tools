// Subtraction
let sub = function (num1,num2) {
    let sub_ = num1 - num2;
    return sub_;
};
let sub__ = sub(1,2);
console.log(`The value is ${sub__}`);

//Multiplication
let mul = function (num1,num2) {
    let mul_ = num1*num2;
    return mul_;
};
let mul__ = mul(1,2);
console.log(`The value is ${mul__}`);

// Divide
let div = function (num1,num2) {
    let div_ = num1/num2;
    return div_;
};
let div__ = div(1,2);
console.log(`The value is ${div__}`);

// If else inside a function
let isGreaterThan = function (age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
};
let result = isGreaterThan(17);
console.log (result);

// Never console inside a function. It is only to return value back.


console.log("hello");
console.log("a");
console.log("b");
console.log("c");
console.log("d");
