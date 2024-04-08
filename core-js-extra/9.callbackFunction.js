let fun1 = () => {
  // ...
};

let fun2 = () => {
  // ...
};

fun2(fun1);

/* 
Callback function:
    Function which is passed is called callback function
        In above example: fun1 is callback function
    Function which passes another function is call higher order function
        In above example: fun2 is higher order function

    setTimeout(func,3000) or,
    setTimeout(() => {},3000)
        Set time out function calls itself after a designated time

    setInterval(func,3000) or,
    setInterval(() => {},3000)
        Set interval function calls itself after a designated time

    .map(func) or,
    .map(() => {})
        Map is a higher order function that passes a function
        Similarly, filter, reduce, some, every are also higher order functions
*/
