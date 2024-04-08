import mongoose from "mongoose";
import { dbUrl } from "../utils/constant.js";

const connectToMongoDb = () => {
  mongoose.connect(dbUrl);
  console.log("application is connected to mongodb successfully.");
};

export default connectToMongoDb;
