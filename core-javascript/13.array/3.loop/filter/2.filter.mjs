//Filter the array [1,2,3,4] and display odd numbers i.e [ 1, 3 ]
let ar1 = [1, 2, 3, 4];
let ar2 = ar1.filter((value, i) => {
  if (value % 2 === 0) {
    return false;
  } else {
    return true;
  }
});
console.log(ar2);
