let fun1 = () => {
  // ...
};

let fun2 = () => {
  // ...
};

fun2(fun1);

let fun3 = () => {
  return () => {};
};

fun3();

/* 
HOF (Higher Order Function)
    Function which takes an argument as a function
        Example: fun2
    Function which returns another function
        Example: fun3

    Also used in onClick and middleware in back-end
*/
