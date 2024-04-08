import { Schema } from "mongoose";

let userSchema = Schema(
  {
    entry: {
      // required: true,
      type: Number,
    },
    name: {
      // required: true,
      type: String,
    },
    age: {
      // required: true,
      type: Number,
    },
    isMarried: {
      // required: true,
      type: Boolean,
    },
    dateOfBirth: {
      // required: true,
      type: Date,
    },
    gender: {
      // required: true,
      type: String,
    },
    nationality: {
      // required: true,
      type: String,
    },
    address: {
      // required: true,
      type: String,
    },
    phoneNumber: {
      // required: true,
      type: Number,
    },
    email: {
      // required: true,
      type: String,
    },
    userName: {
      // required: true,
      type: String,
    },
    password: {
      // required: true,
      type: String,
    },
    programmingLanguage: [
      {
        language: {
          type: String,
        },
        framework: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true },
);

export default userSchema;
