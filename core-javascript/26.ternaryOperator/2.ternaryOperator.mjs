/* 
less than or equal to 17 = > "Minor"
from 18 to 50 => "Adult"
from 51 and above => "Elderly"
*/

let age = 17;
let category =
  age >= 0 && age <= 17
    ? "Minor"
    : age >= 18 && age <= 50
    ? "Adult"
    : "Elderly";

console.log(category);
console.log();


/* 
num is less than or equal 39 = > "Fail"
num [40-59] = > "Third Division"
num [60-79] = > "Second Division"
num [80-84] = > "First Division"
else "Distinction"
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
    : "Distinction";

console.log(categoryNum);

