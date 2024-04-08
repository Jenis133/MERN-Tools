let sum = function (num1, num2) {
  let num3 = num1 + num2; //3
  console.log("a");
  return num3;
};

console.log("hello");
let s = sum(1, 2);
console.log("end");
console.log(s);

/* 
hello
a
end
3

*/

// by default control will return to its function call  when the control reached to  the end of function definition

// conclusion
//  function without return  call=>  sum()
// function with return  call => let a= sum()


//

