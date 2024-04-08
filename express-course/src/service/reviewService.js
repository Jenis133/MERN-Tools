import { Review } from "../model/model.js";

export let createReviewService = async (data) => {
  return await Review.create(data);
};
export let readAllReviewService = async () => {
  return await Review.find({})
    .populate("user", "name")
    .populate("product", "name price"); //populate the data on postman
};
export let readAllSpecificReviewService = async (id) => {
  return await Review.findById(id)
    .populate("user", "name")
    .populate("product", "name price");
};
export let updateReviewService = async (id, data) => {
  return await Review.findByIdAndUpdate(id, data, {
    new: true,
  });
};
export let deleteReviewService = async (id) => {
  return await Review.findByIdAndDelete(id);
};
