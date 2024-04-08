import {
  createReviewService,
  deleteReviewService,
  readAllReviewService,
  readAllSpecificReviewService,
  updateReviewService,
} from "../service/reviewService.js";

export let createReviewController = async (req, res, next) => {
  try {
    const result = await createReviewService(req.body); //posts in mongodb
    res.status(201).json({
      success: true,
      message: "Post method: Review created successfully",
      result: result, // use await for this part // add async if await is used.
    });
  } catch (error) {
    res.status(400).json({
      success: true,
      message: error.message,
    });
  }
  /*     let result = await Review.create(data);
    res.status(201).json({
        success: true,
        message: "Post method: Review created successfully",
        result: result,
    }); */
};

export let readAllReviewController = async (req, res, next) => {
  try {
    const result = await readAllReviewService();
    res.status(200).json({
      success: true,
      message: "Get method: Review read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readAllSpecificReviewController = async (req, res, next) => {
  try {
    const result = await readAllSpecificReviewService(req.params.id); // gets dynamic id
    res.status(200).json({
      success: true,
      message: "Review read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updateReviewController = async (req, res, next) => {
  try {
    const result = await updateReviewService(req.params.id, req.body, {
      new: true, // by default shows false which is old data
    });
    res.status(201).json({
      success: true,
      message: "Review updated successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteReviewController = async (req, res, next) => {
  try {
    const result = await deleteReviewService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Review deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
