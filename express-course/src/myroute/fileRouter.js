import { Router } from "express";
import { uploadMultipleFile, uploadSingleFile } from "../controller/fileController.js";
import upload from "../utils/uploadFile.js";

const uploadFileRouter = Router();

uploadFileRouter
.route("/single")
.post(upload.single("file1"), uploadSingleFile); // upload single file

uploadFileRouter
.route("/multiple")
.post(upload.array("file1"), uploadMultipleFile); // upload multiple files

export default uploadFileRouter;
