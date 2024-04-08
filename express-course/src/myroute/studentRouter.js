import { Router } from "express"; // this is an import from package
import {
  createStudent,
  deleteStudent,
  readAllSpecificStudent,
  readAllStudent,
  updateStudent,
} from "../controller/studentController.js";

let studentRouter = Router();

studentRouter
  .route("/") //localhost:8000/students
  .post(createStudent) // api in studentController.js
  .get(readAllStudent);

studentRouter
  .route("/:id") //localhost:8000/students/1234234
  .get(readAllSpecificStudent)
  .patch(updateStudent)
  .delete(deleteStudent);

export default studentRouter;
