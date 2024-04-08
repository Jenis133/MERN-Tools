import mongoose from "mongoose";
import { dbUrl } from "../7. utils/constant.js";

const connectMongoDb = () => {
  mongoose.connect(dbUrl);
  console.log("Connected to mongoDb successfully");
};

export default connectMongoDb;
