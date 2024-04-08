/* 
ascending sort a,b,c,d
descending sort d,c,b,a
*/
let ar1 = [`a`,`c`,`b`];

// ascending sort
let ar2 = ar1.sort(); // [`a`,`b`,`c`];
console.log(ar2);

/* The sorting process in programming is based on comparisons between the first characters of any two values
For example:
[1,9] => [1,9]
[`c`,`a`] = > [`a`,`c`]
[9,10] = > [10,9] Here 10 will be displayed first because first character 1 is smaller than 9 //Interview
*/

/* The sorting process for alphabets is done by prioritizing capital letters first and then the smaller letters
For example:
[`a`,`b`,`A`] => [`A`,`a`,`b`] //Interview

[`1`,`a`] => depends on Js
[`@`,`a`] => depends on Js
 */

