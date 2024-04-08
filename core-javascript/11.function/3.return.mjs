 let sum = function (num1,num2) {
    let num3 = num1 + num2;
    console.log("First space");
    return num3; //Returns the value back to the function it was called
    console.log("Second space"); //Since the value is returned above this line won't run
 }
 console.log("Third space");
 let a = sum(1,2); //Variable a stores the returned value of the function
 console.log("Fourth space");
 console.log(`The output is ${a}`);
 console.log("Fifth space");
 console.log(a*2);

/*
Note: Function with return call should be stored in a variable
          Ex: call => let a = sum();
          Function without return should be called directly.
          Ex: call => sum();
*/
