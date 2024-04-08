// purpose of map is to return an array
// Example 1: return number
let ar1 = ["s","i","d"];
//                   s      0
let ar2 = ar1.map((value, index) => {
    return 3;
});
console.log(ar2);
console.log();

// Example 2: return value
//                   s      0
let ar3 = ar1.map((value, index) => {
    return value;
});
console.log(ar3);
console.log();

/* Example 3: Convert first letter to capital
"my" => "My" */

let input = "my";
let capitalize = input.split("").map((value,i) => { //split string first and convert to array ["m","y"]
    if (i === 0) { //select the first index
        return value.toUpperCase();
    }
    else {
        return value.toLowerCase();
    }
});
let output = capitalize.join(""); //join array and convert back to string
console.log(output);