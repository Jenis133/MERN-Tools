import jwt from "jsonwebtoken";

let infoObj = {
    id: 1234,
};

let secretKey = "dw12"; // pass as a string

let expiryInfo = {
    expiresIn: "365d",
}; // expiry info must be in same format

let token = jwt.sign(infoObj, secretKey, expiryInfo); // this creates a token
console.log(token);

// generated token
let myToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNCwiaWF0IjoxNzA5NzE3ODI2LCJleHAiOjE3NDEyNTM4MjZ9.pOokfsjpFGOR29EQqav-unF25FqLrwAFvYFH_NKWG1g";

try {
    let infoObjOutput = jwt.verify(myToken, "dw12"); // this verifies the token created with secretKey // if verified it returns an object
    console.log(infoObjOutput);
}
catch (error) {
    console.log(error.message);
}