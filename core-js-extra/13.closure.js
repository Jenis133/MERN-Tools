let fun1 = () => {
  let a = 10;
  console.log(a);
  let fun2 = () => {
    let b = 15;
    console.log(a);
    console.log(b);
  };
  fun2();
};

fun1();

/*
Closure:
    Function with it's lexical scope is called closure
    In above example:
        variable a is accessed by fun2 from from1
        Essentially, fun1 is a closure where fun2 can access it's lexical scope which is fun1 itself
*/
