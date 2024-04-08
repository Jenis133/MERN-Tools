import { Schema } from "mongoose";

let userSchema = Schema(
  {
    fullName: {
      required: true, // by default it's false
      type: String,
      trim: true,
    },
    address: {
      required: true,
      type: String,
      trim: true,
    },
    email: {
      unique: true, // unique value
      required: true,
      type: String,
      trim: true,
    },
    password: {
      required: true,
      type: String,
      trim: true,
    },
    phoneNumber: {
      required: true,
      type: Number,
      trim: true,
    },
    gender: {
      required: true,
      type: String,
      trim: true,
      default: "male", // default value
    },
    dob: {
      required: true,
      type: Date, // must be in ISO format //yyyy-mm-dd
      trim: true,
    },
    isMarried: {
      required: true,
      type: Boolean,
      trim: true,
    },
  },
  { timestamps: true },
);

/* 
email => unique
password =>
phoneNumber
gender
dob
isMarried
 */

export default userSchema;
