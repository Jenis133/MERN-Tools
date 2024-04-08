import { User } from "../model/model.js";
import {
  createUserService,
  deleteUserService,
  readAllUserService,
  readAllSpecificUserService,
  updateUserService,
} from "../service/userService.js";
import bcrypt from "bcrypt";
import { sendEmail } from "../utils/sendmail.js";

export let createUserController = async (req, res, next) => {
  let data = req.body; //{.....}
  data.password = await bcrypt.hash(data.password, 10);
  try {
    const result = await createUserService(data); //posts in mongodb

/*  Send email in a loop
  for(let i = 1; i <= 2; i++) {
  await sendEmail({ //sending email
    // to: ["sidsherpa.codes@gmail.com"],
    to: [req.body.email],
    subject: "Email Test",
    html: `
    <h1>Hi Brother</h1>
    <p>Let's eat keema noodles together</p>
    `
  });
} 
*/
 // Send email once
    await sendEmail({
      to: ["sidsherpa.codes@gmail.com"],
      subject: "Email Test",
      html: `
      <h1>Hi Arpan</h1>
      <p>Let's eat keema noodles together</p>
      `
    });

    res.status(201).json({
      success: true,
      message: "Post method: User created successfully",
      result: result, // use await for this part // add async if await is used.
    });
  } catch (error) {
    res.status(400).json({
      success: true,
      message: error.message,
    });
  }
  /*     let result = await User.create(data);
    res.status(200).json({
        success: true,
        message: "Post method: User created successfully",
        result: result,
    }); */
};

export let readAllUserController = async (req, res, next) => {
  try {
    const result = await readAllUserService();
    res.status(200).json({
      success: true,
      message: "Get method: User read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readAllSpecificUserController = async (req, res, next) => {
  try {
    const result = await readAllSpecificUserService(req.params.id); // gets dynamic id
    res.status(200).json({
      success: true,
      message: "User read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updateUserController = async (req, res, next) => {
  try {
    const result = await updateUserService(req.params.id, req.body, {
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

export let deleteUserController = async (req, res, next) => {
  try {
    const result = await deleteUserService(req.params.id);
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

export let loginUserController = async (req, res, next) => {
  // pass body and password inside a variable
  let email = req.body.email;
  let password = req.body.password;

  // check if email exists in database or not.
  // If exists respond success if not then throw error
  let user = await User/* from model */.findOne({email : email}); // If user found then => {...}. If not found then => null
  if (user === null) {
    res
    .status(404)
    .json({success: false, message: "email or password does not match"});
  }
  else {
    // check if password matches with database or not.
    let dbPassword = user.password;
    let isValidPW = await bcrypt.compare(password, dbPassword) // compare request password with db password

    if (isValidPW) {
      res
      .status(200)
      .json({success: true, message: "login successful"});
    }
    else {
      res
      .status(400)
      .json({success: false, message: "email or password does not match"})
    }
  }
};
