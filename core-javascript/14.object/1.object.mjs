// object
// unlike array an object does not have indexing
// object is same as array but it has information of a data
// it has 3 parts
// property = key + value

let info = {
    name :'Sid',
    age: 29,
    weight : 74,
    isMarried : false,
};

console.log(info.name); // printing a specific property of an object
console.log(info.age);
console.log(info.weight);
console.log(info.isMarried);
console.log();

info.age = 30; // change a specific property of an object
console.log(info);
console.log();

delete info.weight; //delete keyword is used to delete a specific property of an object
console.log(info);