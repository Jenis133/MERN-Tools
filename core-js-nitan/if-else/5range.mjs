/* 
age  0 to 18   => Underage
age  19 to 60  => Adult
age  61 to 150=> Old
else none
*/
let age = 15;

if (age >= 0 && age <= 18) {
  console.log("Underage");
} else if (age === 15) {
  console.log("age is 15");
} else if (age >= 19 && age <= 60) {
  console.log("Adult");
} else if (age >= 61 && age <= 150) {
  console.log("Old");
} else {
  console.log("none");
}
