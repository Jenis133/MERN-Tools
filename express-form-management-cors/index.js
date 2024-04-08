import express, { json } from "express";
import connectMongoDb from "./src/1. database/connectToMongoDb.js";
import userRouter from "./src/6. route/userRouter.js";
import { port } from "./src/7. utils/constant.js";
import cors from "cors";

const expressApp = express();

connectMongoDb(); // connect to database

expressApp.use(cors()); // initialize cors on express app

expressApp.use(json()); // middleware to make express app process json data

// Route address must be lowercase and plural
expressApp.use("/users", userRouter);

expressApp.listen(port, () => {
  console.log("Server is running at port 8000");
});
