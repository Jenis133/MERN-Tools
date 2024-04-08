// [1,3,4,5] = [100,300,4,500];
let ar1 = [1,3,4,5];
//                   1    0
let ar2 = ar1.map((value, i) => {
    if (value%2===0) {
        return value;
    }
    else {
        return value*100;
    }
})
console.log (ar2);