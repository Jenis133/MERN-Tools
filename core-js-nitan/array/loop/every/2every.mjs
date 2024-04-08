let ar1 = [9, 10, 12, 18, 30];

// output will be true if  all of the element return true

let isAllEven = ar1.every((value, i) => {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
});

console.log(isAllEven);


// check whether all students get pass mark from the list [ 40,30,80] here pass marks is 40
