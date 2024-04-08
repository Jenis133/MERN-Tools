// ["my","name","is"] => ["MY0","NAME1","IS2"]
let ar1 = ["my", "name", "is"];
let ar2 = ar1.map((value, i) => {
  return `${value.toUpperCase()}${i}`;
});

console.log(ar2);
