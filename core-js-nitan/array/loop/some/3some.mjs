// "smoking drinking gajadi"
// check weather we have smoking habits using  some

let input = "smoking drinking gajadi";

//some "smoking drinking gajadi"=> ["smoking", "drinking","gajadi"]

// let inputArr = input.split(" "); //["smoking", "drinking","gajadi"]

let hasSmoking = input.split(" ").some((value, i) => {
  if (value === "smoking") {
    return true;
  } else {
    return false;
  }
});

console.log(hasSmoking);

// my => My
//map

//       split("")   map         join("")
// // my =["m","y"]  => ["M","y"] =>My
