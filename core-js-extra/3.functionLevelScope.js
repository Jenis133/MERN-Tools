/*
functional level scope => var
block is related to function
a variable will know within it's functional block only
*/
function sum() {
  console.log(a); //undefined

  var a = 15;

  console.log(a);
}