import { Router } from "express";
export let firstRouter = Router();

firstRouter
  .route("/") //local host:8000
  .post((req, res, next) => {
    console.log("home post");
  })
  .get((req, res, next) => {
    console.log("home get");
  })
  .patch((req, res, next) => {
    console.log("home update");
  })
  .delete((req, res, next) => {
    console.log("home delete");
  });
