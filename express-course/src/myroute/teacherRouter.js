import { Router } from "express"; // this is an import from package
import {
  createTeacher,
  deleteTeacher,
  readAllSpecificTeacher,
  readAllTeacher,
  updateTeacher,
} from "../controller/teacherController.js";

let teacherRouter = Router();

teacherRouter
  .route("/") //localhost:8000/teachers
  .post(createTeacher) // api in teacherController.js
  .get(readAllTeacher);

teacherRouter
  .route("/:id") //localhost:8000/teachers/1234234
  .get(readAllSpecificTeacher)
  .patch(updateTeacher)
  .delete(deleteTeacher);

export default teacherRouter;
