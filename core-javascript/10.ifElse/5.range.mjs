/* 
age 0 to 17 => underage;
age 18 to 60 => adult;
age 61 to 150 => old;
*/

let age = 30;
if (age>=0 && age <=17) {
    console.log("Underage");
}
else if (age >= 18 && age <= 60) {
    console.log("Adult");
}
else if (age >= 61 && age <= 150) {
    console.log("Old");
}
else {
    console.log("None");
}