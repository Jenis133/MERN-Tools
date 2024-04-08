/* 
num is less than or equal 39 = > "Fail"
num [40-59] = > "Third Division"
num [60-79] = > "Second Division"
num [80-84] = > "First Division"
else null
 */

let num = 40;
let categoryNum =
  num >= 0 && num <= 39
    ? "Fail"
    : num >= 40 && num <= 59
    ? "Third Division"
    : num >= 60 && num <= 79
    ? "Second Division"
    : num >= 80 && num <= 84
    ? "First Division"
    : null; // ternary operator must have an else part.

console.log(categoryNum);