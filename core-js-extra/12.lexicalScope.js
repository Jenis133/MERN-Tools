let fun1 = () => {
  let a = 10;
  console.log(a);
  let fun2 = () => {
    let b = 15;
    console.log(b);
    let fun3 = () => {
      let c = 20;
      console.log(c);
      // ...
    };
    fun3();
  };
  fun2();
};

fun1();

/* 
Lexical Scope:
    It is only the scope of parent. That's it.
    It is not the scope of grand-parent
*/

// fun3 scope => c

// fun3 parent scope or fun3 lexical scope
// fun2 scope => b fun 3

// fun2 parent scope or fun2 lexical scope
// fun1 scope => a fun 2

/* 
Total Scope:
    Total Scope = Own Scope + Lexical Scope of parent
 */

