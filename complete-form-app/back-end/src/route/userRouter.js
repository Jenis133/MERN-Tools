import { Router } from "express"; // this is an import from package
import {
  createUserController,
  deleteUserController,
  readAllUserController,
  readAllSpecificUserController,
  updateUserController,
} from "../controller/userController.js";
import validation from "../validation/joiValidation.js";
import formValidation from "../validation/formMiddleware.js";

let userRouter = Router();

userRouter
  .route("/") //localhost:8000/users
  .post(formValidation(validation), createUserController) // pass joi validation
  .get(readAllUserController);

userRouter
  .route("/:id") //localhost:8000/users/1234234
  .get(readAllSpecificUserController)
  .patch(updateUserController)
  .delete(deleteUserController);

export default userRouter;
