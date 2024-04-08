import mongoose from "mongoose";
import { port } from "./portNo.js";

const connectToMongoDb = () => {
  mongoose.connect(port);
  console.log("application is connected to database successfully.");
};

export default connectToMongoDb;
