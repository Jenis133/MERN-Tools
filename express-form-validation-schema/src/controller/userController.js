import {
  createUserService,
  deleteUserService,
  readAllUserService,
  readAllSpecificUserService,
  updateUserService,
} from "../service/userService.js";

export let createUserController = async (req, res, next) => {
  try {
    const result = await createUserService(req.body); //posts in mongodb
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
      message: "Get by ID method: User ID read successfully",
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
      message: "Patch method: User ID updated successfully",
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
      message: "Delete method: User deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
