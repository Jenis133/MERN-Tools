let fun1 = () => {
  let name = "Sid";
  let fun2 = () => {
    console.log(name);
  };
  return fun2;
};

let _fun1 = fun1(); // because the function returns a value
_fun1();

// When a function is returned, it is not the only one who gets returned
// It's lexical scope also gets returned