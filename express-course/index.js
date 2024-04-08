import express, { json } from "express";
import connectToMongoDb from "./src/connectDB/connectToMongoDb.js";
import studentRouter from "./src/myroute/studentRouter.js";
import { bikeRouter } from "./src/route/bikeRouter.js";
import { firstRouter } from "./src/route/firstRouter.js";
import { nameRouter } from "./src/route/nameRouter.js";
import { traineesRouter } from "./src/route/traineesRouter.js";
import productRouter from "./src/myroute/productRouter.js";
import userRouter from "./src/myroute/userRouter.js";
import reviewRouter from "./src/myroute/reviewRouter.js";
import teacherRouter from "./src/myroute/teacherRouter.js";
import uploadFileRouter from "./src/myroute/fileRouter.js";
import { port } from "./src/utils/constant.js";
import cors from "cors";

let expressApp = express();
connectToMongoDb();

expressApp.use(cors()); // cors initialized
expressApp.use(express.static("./public"));
expressApp.use(json()); // it is done to make our application to accept json data

expressApp.use("/trainees", traineesRouter);

expressApp.use("/", firstRouter);
expressApp.use("/names", nameRouter);
expressApp.use("/bikes", bikeRouter);

expressApp.use("/students", studentRouter);
expressApp.use("/teachers", teacherRouter); // This `is route call. The route address must be lowercase.
expressApp.use("/products", productRouter);
expressApp.use("/users", userRouter);
expressApp.use("/reviews", reviewRouter);
expressApp.use("/files", uploadFileRouter);

expressApp.listen(port, () => {
  console.log("app is listening at port 8000");
});

/*
You can also use middleware on index directly this way
It is called application middleware

expressApp.use(
(req,res,next) => {
  console.log("I am application, normal middleware 1");
  let error = new Error("I am application error");
  next(error);
},
(error,req,res,next) => {
  console.log("I am application, error middleware 1");
  console.log(error.message);
  next();
},
(req,res,next) => {
  console.log("I am application, normal middleware 2");
  next();
}
);

expressApp.use(json()); // it is done to make our application to accept json data

expressApp.use("/trainees", traineesRouter);

expressApp.use("/", firstRouter);
expressApp.use("/names", nameRouter);
expressApp.use("/bikes", bikeRouter);

expressApp.use("/students", studentRouter); // This is route call. The route address must be lowercase.
expressApp.use("/products", productRouter); 
expressApp.use("/users", userRouter); 
expressApp.use("/reviews", reviewRouter); 

expressApp.listen(8000, () => {
  console.log("app is listening at port 8000");
}); */
