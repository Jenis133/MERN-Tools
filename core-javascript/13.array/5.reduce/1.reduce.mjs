// syntax, execution, usage

// Find the sum of all elements in an array using reduce method
let money = [1,2,3];
                    //previous,current
let total = money.reduce((pre, curr) => { // this runs a loop on the array with an initial value to form a sequence
    return pre + curr;
},0 ) // initial value

//         [1        2        3]
// 0 => 0 + 1 => 1 + 2 => 3 + 3 => Output is 6
console.log(total);