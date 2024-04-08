import { Schema } from "mongoose";

let studentSchema = Schema(
  {
    name: {
      type: String,
      // lowercase: true, this converts the value into lowercase
      uppercase: true, // this converts the value into uppercase
      trim: true, // this removes space before and after any entry
      required: [true, "name field is required"], // error field must resemble with field name i.e. name: != "Name field"
      minLength: [3, "name field must be 3 or more characters"],
      maxLength: [25, "name field must be less than 25 characters"],
    },
    password: {
      type: String,
    },
    phoneNumber: {
      type: Number,
      /*  min:[1000000000, "Phone number must not be less than 10 digits"], // digit validation
            max:[9999999999, "Phone number must not be more than 10 digits"], */
      validate: (value) => {
        if (value.toString().length !== 10) {
          throw new Error("Phone Number must be exact 10 digits");
        }
      },
    },
    roll: {
      type: Number,
      min: [0, "Roll must be more than 0"], // number validation
      max: [100, "Roll must be less than 100"],
    },
    isMarried: {
      type: Boolean,
      default: false, // this assigns a default value as false, can be true if needed
    },
    spouseName: {
      type: String,
    },
    email: {
      type: String,
    },
    gender: {
      type: String,
      default: "male",
      validate: (value) => {
        /*             if (!(value === "male" || value === "female" || value === "other")) { // using ! altogether
                throw new Error ("Please enter the correct gender");
            } */
        if (value === "male" || value === "female" || value === "other") {
        } else {
          throw new Error("Please enter the correct gender");
        }
      },
    },
    dob: {
      type: Date,
      // default: new Date(), this assigns a new date as default
    },
    location: {
      country: {
        type: String,
      },
      exactLocation: {
        type: String,
      },
    },
    favTeacher: [
      {
        type: String,
      },
    ],
    favSubject: [
      {
        bookName: {
          type: String,
        },
        bookAuthor: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true },
);

export default studentSchema;

/* 
Manipulation on schema
Validation on schema
 */
