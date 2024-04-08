// The boolean value returned in filter method determines whether an element of an array is filtered or not.
// by default return will be false if not mentioned.
/* 
[1,2,3,4] = [1,2] Yes
[1,2,3,4] = [1,4] Yes
[1,4] = [1,2,3,4] No
[1,2,3,4] = [1,5] No
 */

//Filter the array [1,2,3,4] and display even numbers  i.e [ 2, 4 ]
let ar1 = [1,2,3,4];
let ar2 = ar1.filter((value, i) => {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
});
console.log(ar2);