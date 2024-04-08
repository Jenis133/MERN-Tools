// joining two objects
let info1 = {
    name: "nitan",
    age: 29
};
let info2 = {
    isMarried : false
};
let info3 = {
    address: "gagalphedi",
    ...info1,
    ...info2 // isMarried : false
};
console.log(info3);