import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  readSpecificUserController,
  readUserController,
  updateUserController,
  verifyEmail,
} from "../5. controller/userController.js";

const userRouter = Router();

userRouter
  .route("/") //localhost:8000/users
  .post(createUserController)
  .get(readUserController);

userRouter
  .route("/verify-email") //localhost:8000/users/verify-email
  .patch(verifyEmail);

userRouter
  .route("/:id") //localhost:8000/users/abcd
  .get(readSpecificUserController)
  .patch(updateUserController)
  .delete(deleteUserController);

export default userRouter;
