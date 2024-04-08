let ar1 = [40, 30, 80];

// output will be true if  all of the element return true

let isAllPass = ar1.every((value, i) => {
  if (value >= 40) {
    return true;
  } else {
    return false;
  }
});

console.log(isAllPass);

// check whether all students get pass mark from the list [ 40,30,80] here pass marks is 40
