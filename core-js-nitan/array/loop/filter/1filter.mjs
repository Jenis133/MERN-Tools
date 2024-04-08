/*
[1,2,3,4] = [1,2] ok
[1,2,3,4] = [1,4], ok
[1,4] =[1,4,4] not ok
[1,2,3,4] = [1,5] o ok
*/

// by default return will be false
let ar1 = [1, 2, 3, 4];

// ar2 =[2,4]
let ar2 = ar1.filter((value, i) => {});
