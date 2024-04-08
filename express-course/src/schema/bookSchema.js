import { Schema } from "mongoose";

let bookSchema = Schema({
  name: {
    required: true,
    type: String,
  },
  author: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
  isAvailable: {
    required: true,
    type: Boolean,
  },
});

export default bookSchema;
