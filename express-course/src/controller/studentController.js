import {
  createStudentService,
  deleteStudentService,
  readAllSpecificStudentService,
  readAllStudentService,
  updateStudentService,
} from "../service/studentService.js";

export let createStudent = async (req, res, next) => {
  try {
    const result = await createStudentService(req.body); //posts in mongodb
    res.status(201).json({
      success: true,
      message: "Post method: Student created successfully",
      result: result, // use await for this part // add async if await is used.
    });
  } catch (error) {
    res.status(400).json({
      success: true,
      message: error.message,
    });
  }
  /*     let result = await Student.create(data);
    res.status(201).json({
        success: true,
        message: "Post method: Student created successfully",
        result: result,
    }); */
};

export let readAllStudent = async (req, res, next) => {
  let {totalDataInPage = 10, pageNo = 1, sort, ...query} = req.query; // object destructure
  //query = {name:"Sid",roll:"9"}
  //totalDataInPage = 3
  //pageNo = 2
  //This section is for pagination
  let skip = (Number(pageNo - 1)) *(Number(totalDataInPage)); // This is the formula
  let limit = totalDataInPage;
  try {
    const result = await readAllStudentService(query,sort,skip,limit);
    res.status(200).json({
      success: true,
      message: "Get method: Student read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readAllSpecificStudent = async (req, res, next) => {
  try {
    const result = await readAllSpecificStudentService(req.params.id); // gets dynamic id
    res.status(200).json({
      success: true,
      message: "Student read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updateStudent = async (req, res, next) => {
  try {
    const result = await updateStudentService(req.params.id, req.body, {
      new: true, // by default shows false which is old data
    });
    res.status(201).json({
      success: true,
      message: "Student update successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteStudent = async (req, res, next) => {
  try {
    const result = await deleteStudentService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
