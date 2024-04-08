//filter odd number

let ar1 = [1, 2, 3, 4];

// ar2 =[2,4]
let ar2 = ar1.filter((value, i) => {
  if (value % 2 === 0) {
    return false;
  } else {
    return true;
  }
});
