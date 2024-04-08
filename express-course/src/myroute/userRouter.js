import { Router } from "express"; // this is an import from package
import {
  createUserController,
  deleteUserController,
  readAllUserController,
  readAllSpecificUserController,
  updateUserController,
  loginUserController,
} from "../controller/userController.js";

let userRouter = Router();

userRouter
  .route("/") //localhost:8000/users
  .post(createUserController) // api in userController.js
  .get(readAllUserController);

userRouter
  .route("/:id") //localhost:8000/users/1234234
  .get(readAllSpecificUserController)
  .patch(updateUserController)
  .delete(deleteUserController);

userRouter
  .route("/login") //localhost:8000/users/login
  .post(loginUserController);

export default userRouter;
