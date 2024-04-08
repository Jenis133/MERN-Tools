/* Example: Make a function to convert first letter to capital
"my" => "My" */

let firstLetterCapital = (input) => { //input is parameter
    let capitalize = input.split("").map((value,i) => { //split string first and convert to array ["m","y"]
        if (i === 0) { //select the first index
            return value.toUpperCase();
        }
        else {
            return value.toLowerCase();
        }
    });
    let output = capitalize.join(""); //join array and convert back to string
    return output;
}

let functionCall = firstLetterCapital("siDdHarTHa"); //store return in a variable and pass an argument
console.log(functionCall); //print output after function call
console.log();
