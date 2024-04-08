// syntax, execution, usage

// Find the product of all elements in an array using reduce method
let money = [1,3,5];
                    //previous,current
let total = money.reduce((pre, curr) => { // this runs a loop on the array with an initial value to form a sequence
    return pre * curr;
},1 ) // initial value

//         [1        2        3]
// 1 => 1 * 1 => 1 * 3 => 3 * 5 => Output is 15
console.log (total);