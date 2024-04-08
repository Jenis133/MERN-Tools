import { Schema } from "mongoose";

let reviewSchema = Schema({
  user: {
    required: true,
    type: Schema.ObjectId,
    ref: "User", // Pass model name => "User"
  },
  product: {
    required: true,
    type: Schema.ObjectId,
    ref: "Product", // Pass model name => "Product"
  },
  message: {
    required: true,
    type: String,
  },
  rating: {
    required: true,
    type: Number,
  },
});

export default reviewSchema;
