import { Schema } from "mongoose";

let classroomSchema = Schema({
  name: {
    required: true,
    type: String,
  },
  numberofBench: {
    required: true,
    type: Number,
  },
  hasTv: {
    required: true,
    type: Boolean,
  },
});

export default classroomSchema;
