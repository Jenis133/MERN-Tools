// ["my","name","is"] => ["MY","NAME","IS"]

let ar1 = ["my", "name", "is"];

let ar2 = ar1.map((value, i) => {
  return value.toUpperCase();
});
console.log(ar2);
