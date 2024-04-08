import { Schema } from "mongoose";

const userSchema = Schema(
  {
    fullName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      /* unique: true, // email must be unique every time */
    },
    password: {
      type: String,
      trim: true,
    },
    dob: {
      type: Date, // date must be in ISO format i.e yyyy-mm-dd
      trim: true,
    },
    gender: {
      type: String,
      trim: true,
      default: "male", // default value
    },
    role: {
      type: String,
      trim: true,
    },
    isVerifiedEmail: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default userSchema;
