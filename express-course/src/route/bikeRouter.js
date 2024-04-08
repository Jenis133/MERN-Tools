import { Router } from "express";

export let bikeRouter = Router();

bikeRouter
  .route("/") // localhost:8000/bike

  .post(
    (req, res, next) => {
      console.log("i am middleware 1");

      let error = new Error("this is my 2nd error"); // creates a new error
      next(error); // calls next middleware
    },
    (error, req, res, next) => {
      console.log("i am an error middleware 1");
      console.log(error.message);
    },
    (req, res, next) => {
      console.log("i am middleware 2");
      next();
    },
    (error, req, res, next) => {
      console.log("i am an error middleware 2");
    },
    (req, res, next) => {
      console.log("i am middleware 3");
      res.json({
        // send as an object, output a meaningful message
        success: true,
        message: "bike created successfully",
      });
    },
  )

  .post((req, res, next) => {
    console.log(req.body);
    res.json("home post");
  })
  .get((req, res, next) => {
    res.json("bike get");
  })
  .patch((req, res, next) => {
    res.json("bike patch");
  })
  .delete((req, res, next) => {
    res.json("bike delete");
  });

// new url (route)
bikeRouter
  .route("/name") // localhost:8000/bike/name
  .get((req, res, next) => {
    res.json("bike name get");
  });

bikeRouter
  .route("/:id") // localhost:8000/bike/:id
  .get((req, res, next) => {
    console.log(req.params);
    /* 
   req.params = {
      id:"1234"
   } */

    /* 
   req.query = {
      name = "nitan",
      address = "gagalphedi"
   } */
    res.json(req.query);
  });

bikeRouter
  .route("/:id1/name/:id2") // localhost:8000/bike/:id1/name/:id2
  .get((req, res, next) => {
    console.log(req.params);
    /* 
   req.params = {
      id1:"1234"
      id2:"4321"
   } */
    res.json(req.params);
  });
