let info = {
  name: "nitan",
  surname: "thapa",
  age: 29,
  fullName: function () {
    console.log(`my name is ${this.name} ${this.surname}`);
  },
};

console.log(info.name);
info.fullName();

// this always point itself
//  arrow function does not support this
