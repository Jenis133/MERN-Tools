import { Router } from "express"; // this is an import from package
import {
  createReviewController,
  deleteReviewController,
  readAllReviewController,
  readAllSpecificReviewController,
  updateReviewController,
} from "../controller/reviewController.js";

let reviewRouter = Router();

reviewRouter
  .route("/") //localhost:8000/reviews
  .post(createReviewController) // api in reviewController.js
  .get(readAllReviewController);

reviewRouter
  .route("/:id") //localhost:8000/reviews/1234234
  .get(readAllSpecificReviewController)
  .patch(updateReviewController)
  .delete(deleteReviewController);

export default reviewRouter;
