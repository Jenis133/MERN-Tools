// check whether a person has smoking habit   ["smoking", "drinking", "biting nails"]let ar1 = ["nitan", "ram", "hari"];

let habits = ["smoking", "drinking", "biting nails"];
let hasSmokingHabits = habits.some((value, i) => {
  if (value === "smoking") {
    return true;
  } else {
    return false;
  }
});
console.log(hasSmokingHabits);

// "smoking drinking gajadi"
// check weather we have smoking habits using  some
