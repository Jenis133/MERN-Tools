import bcrypt from "bcrypt";

/* 
"nitan" => $2b$10$LYJPqDxspl.Qa0sb/7G3t.mEMiJurMM/2eVDScWM4TYQHrzQVZ6uK
hash code is always generated different for every entry
hash code of same string is unique

encryption is possible but decryption is not possible in bcrypt 
*/

// ******** generate hash code
let hasCode = await bcrypt.hash("nitan",10);

console.log(hasCode);

// ******** compare hash code
let isValidPW = await bcrypt.compare(
    "nitan", "$2b$10$LYJPqDxspl.Qa0sb/7G3t.mEMiJurMM/2eVDScWM4TYQHrzQVZ6uK"
);
console.log(isValidPW);