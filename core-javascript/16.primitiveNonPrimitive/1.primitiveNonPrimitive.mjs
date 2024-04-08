/* 
In case of primitive  -
                        A new memory space is created if let keyword is used.

let a = 1;
let b = a;
let c = 1;
a = 10;
console.log(a); // a = 10
console.log(b); // b = 1
console.log(c); // c = 1

                        === (value)  
                        In Primitive the === produce true if the value are same.

In case of Non-primitive -
                        A new memory space is created if a variable is not a copy of another variable.
                        If a variable is a copy of another variable, the variable share the memory.
let a = [1,2];
let b = a;
let c = [1,2];
a.push(3);
console.log(a); // a = [1,2,3]
console.log(b); // b = [1,2,3]
console.log(c); // c = [1,2]

                        === (memory location)  
                        In Non primitive the === produce true if they share the same memory location.
 */

