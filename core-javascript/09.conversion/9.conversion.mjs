/* 1234 = "1234";
  "1234" = 1234;*/

//conversion to string
let num = 1234;
let strNum = String(num); //"1234"
console.log(strNum);
console.log();
//or
console.log(String(1234)); //"1234"
console.log();

//conversion to number
console.log(Number("1234")); //1234
console.log();

//conversion to boolean
console.log(Boolean("Sid"));
console.log(Boolean("a"));
console.log(Boolean("0"));
console.log(Boolean(" "));
console.log(Boolean("")); //false
console.log(Boolean(0)); //false
console.log(Boolean(1));

/* Boolean conversion:
        All empty are falsy values i.e either "" or 0.

        for boolean to string conversion
            "" => falsy
            all are truthy including space " "

        for boolean to number conversion
            0 => falsy
            all are truthy

Useful shortcut = Alt + Shift + A to comment multiple lines. */
