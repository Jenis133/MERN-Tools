let firstLetterCapital = (input) => {
  let inputArr = input.split(""); //["m","y"]

  let inputArrArr = inputArr.map((value, i) => {
    if (i === 0) {
      return value.toUpperCase();
    } else {
      return value.toLowerCase();
    }
  }); //["M","y"]

  let output = inputArrArr.join("");
  return output;
};

let _firstLetterCapital = firstLetterCapital("nitAN");
console.log(_firstLetterCapital);
