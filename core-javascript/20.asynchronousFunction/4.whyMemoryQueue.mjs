//  Memory Queue works on FIFO principle vs Java which works on LIFO principle

setTimeout(() => { // Asynchronous function runs at last after call stack is empty
    console.log("3 sec"); 
}, 3000);
console.log(1);

setTimeout(() => { // Asynchronous function runs at last after call stack is empty
    console.log("0 sec"); 
}, 0);
console.log(2);

setTimeout(() => { // Asynchronous function runs at last after call stack is empty
    console.log("1 sec"); 
}, 1000);
console.log(3);
/* 
any task that takes 5 sec
=> a
*/

