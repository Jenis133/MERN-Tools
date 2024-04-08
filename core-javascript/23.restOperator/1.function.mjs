// always define a function with a const variable rather than a let from now on

const sum = (a, ...other) => {
    console.log(a);
    console.log(other);
};
sum (1,2,3,4,5,6);

// ... other is a rest operator in this case
// rest operator are used in the parameter