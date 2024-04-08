/* 
if age [from 1 to 17], console your ticket is free
if age [18 to 25 ],  your ticket cost 100
else,  your ticket cost 200 */

let age = 30;
if (age === 0) {
    console.log("Invalid. Please enter again")
}
else if (age >=1 && age<=17) {
    console.log("Your ticket is free");
}
else if (age>=18 && age<=25) {
    console.log("Your ticket cost is 100");
}
else {
    console.log("Your ticket cost is 200");
}