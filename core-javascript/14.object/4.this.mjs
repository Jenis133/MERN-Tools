// javascript variable can store even a function.
// Do not console a function. It must be called not consoled.

// "this" keyword always points to itself within a global scope
// Imp - arrow function does not support "this" keyword

let info = {
    name: "nitan",
    surname: "thapa",
    age: 29,
    fullName : function () {
        console.log (`My name is ${this.name} ${this.surname}`);
    }
};

console.log(info.name);
info.fullName();