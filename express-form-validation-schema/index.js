import express, { json } from "express";
import connectToMongoDb from "./src/connectDB/connectToMongoDb.js";
import userRouter from "./src/route/userRouter.js";

const expressApp = express(); // must instantiate express to make an application
connectToMongoDb(); // must call allocated function to make db connection

expressApp.use(json()); // must pass json() to make application accept json data

expressApp.use("/users", userRouter); // must make a route call for api endpoint. Route address must be lowercase.

expressApp.listen(8000, () => {
  console.log("app is listening at port 8000");
});