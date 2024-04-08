let ar1 = [9, 10, 12, 18, 30];

// output will be true if  all of the element return true

let isAllGreaterThan18 = ar1.every((value, i) => {
  if (value > 2) {
    return true;
  } else {
    return false;
  }
});

console.log(isAllGreaterThan18);



// check whether we have all even number in the list [2,4,9,6]


