if (true) {
  //p1
  let a = 1;
  if (true) {
    //p2
    // let a = 3;
    let b = 0;
    if (true) {
      //p3
      // let a = 10;
      console.log(a);
    }
  }
}

//p1
//a = 1

//p2
//a = 3
//b = 0

//p3
//a = 10

// In scope chaining the variable will be taken from it's block
// If the variable is not present in it's block then it will be taken from parent block and so on

// In case of let - taken from it's block
// In case of var - taken from function block