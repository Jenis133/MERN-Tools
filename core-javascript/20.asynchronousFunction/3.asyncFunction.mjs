/* 
What is asynchronous function?
Ans: Anything that push it's tasks to the background (node) are called asynchronous function
     During code execution, the background code will execute when all synchronous code gets executed.

What is call stack?
     Call stack run the code inside it once the code gets executed, the code is popped off..

What is event loop?
      Event loop is a mediator which continuously monitor call stack and memory queue.
      If the call stack is empty it take the function from memory queue to call stack.
*/



console.log(1);
setTimeout(() => { // Asynchronous function runs at last after call stack is empty
    console.log("Async Power"); 
},0);
console.log(2);
console.log();
