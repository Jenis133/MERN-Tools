import {
  createUserService,
  deleteUserService,
  readSpecificUserService,
  readUserService,
  updateUserService,
  verifyEmailService,
} from "../4. service/userService.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendEmail } from "../7. utils/sendMail.js";
import { secretKey } from "../7. utils/constant.js";

export const createUserController = async (req, res, next) => {
  try {
    let data = req.body; // create a variable for incoming data
    let hashPassword = await bcrypt.hash(data.password, 10); // hash the password

    data = {
      // add new values to the json object sent from postman
      ...data,
      isVerifiedEmail: false,
      password: hashPassword,
    };

    // post the data in database
    const result = await createUserService(data);

    // generate token //import jwt
    let infoObj = {
      _id: result._id, // assign result generated id here
    };
    // import secretKey from constant.js
    let expiryInfo = {
      expiresIn: "5d",
    };
    let token = await jwt.sign(infoObj, secretKey, expiryInfo);

    // send email //import sendEmail
    await sendEmail({
      from: "'Sid Sherpa' <sidsherpa.codes@gmail.com>",
      to: data.email, // assign data email property here
      subject: "Account Creation",
      // send generated token inside the link
      html: `
        <h1>Hi Sid</h1>
        <h3>Your account has been created successfully ;)</h3>
        <a href = "http://localhost:8000/verify-email?token=${token}">
        http://localhost:8000/verify-email?token=${token}
        </a>
      `,
    });

    res.status(201).json({
      success: true,
      message: "User has been created successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyEmail = async (req, res, next) => {
  try {
    // create a variable for token sent from postman
    let tokenString = req.headers.authorization;

    // convert token string into token array
    let tokenArray = tokenString.split(" ");

    // select the second element of the token array
    let token = tokenArray[1];

    // verify token sent from postman
    let infoObj = await jwt.verify(token, secretKey);

    // get id from verified token
    let userId = infoObj._id;

    // change the value of isVerifiedEmail: true
    let data = { isVerifiedEmail: true };

    const result = await verifyEmailService(userId, data, {
      new: true, // by default shows false which is old data
    });
    res.status(201).json({
      success: true,
      message: "User verified successfully",
      result: result,
    });

    console.log(infoObj);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readUserController = async (req, res, next) => {
  try {
    const result = await readUserService();
    res.status(200).json({
      success: true,
      message: "User read successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificUserController = async (req, res, next) => {
  try {
    let id = req.params.id;
    const result = await readSpecificUserService(id); // gets dynamic id
    res.status(200).json({
      success: true,
      message: "User id read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const updateUserController = async (req, res, next) => {
  try {
    let id = req.params.id;
    let data = req.body;
    const result = await updateUserService(id, data, {
      new: true, // by default shows false which is old data
    });
    res.status(201).json({
      success: true,
      message: "User updated successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const deleteUserController = async (req, res, next) => {
  try {
    let id = req.params.id;
    const result = await deleteUserService(id);
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
