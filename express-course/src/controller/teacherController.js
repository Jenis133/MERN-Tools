import {
  createTeacherService,
  deleteTeacherService,
  readAllSpecificTeacherService,
  readAllTeacherService,
  updateTeacherService,
} from "../service/teacherService.js";

export let createTeacher = async (req, res, next) => {
  try {
    const result = await createTeacherService(req.body); //posts in mongodb
    res.status(201).json({
      success: true,
      message: "Post method: Teacher created successfully",
      result: result, // use await for this part // add async if await is used.
    });
  } catch (error) {
    res.status(400).json({
      success: true,
      message: error.message,
    });
  }
  /*     let result = await Teacher.create(data);
    res.status(201).json({
        success: true,
        message: "Post method: Teacher created successfully",
        result: result,
    }); */
};

export let readAllTeacher = async (req, res, next) => {
  try {
    const result = await readAllTeacherService();
    res.status(200).json({
      success: true,
      message: "Get method: Teacher read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readAllSpecificTeacher = async (req, res, next) => {
  try {
    const result = await readAllSpecificTeacherService(req.params.id); // gets dynamic id
    res.status(200).json({
      success: true,
      message: "Teacher read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updateTeacher = async (req, res, next) => {
  try {
    const result = await updateTeacherService(req.params.id, req.body, {
      new: true, // by default shows false which is old data
    });
    res.status(201).json({
      success: true,
      message: "Teacher update successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteTeacher = async (req, res, next) => {
  try {
    const result = await deleteTeacherService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Teacher deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
