import { Router } from "express"; // this is an import from package
import {
  createProductController,
  deleteProductController,
  readAllProductController,
  readAllSpecificProductController,
  updateProductController,
} from "../controller/productController.js";

let canAddProduct = (role) => {
  return (req, res, next) => {
    if (role === "admin") {
      return next();
    } else if (role === "customer") {
      res.status(400).json({
        success: false,
        message: "Sorry, you are not allowed to create product",
      });
    }
  };
};

let productRouter = Router();

productRouter
  .route("/") //localhost:8000/products
  // .post(createProductController) // api in productController.js
  .post(canAddProduct("customer"), createProductController)
  .get(readAllProductController);

productRouter
  .route("/:id") //localhost:8000/products/1234234
  .get(readAllSpecificProductController)
  .patch(updateProductController)
  .delete(deleteProductController);

export default productRouter;

/* 
let canAddProduct = (req, res, next) => {
} 
*/
/* 
make a middleware and pass an age
if age is greater than 18 you can create a product
else throw error

let canAddProduct = (age) => {
    return (req, res, next) => {
        if (age > 18) {
            return next();
        }
        else {
            res.status(400).json({
                success: false,
                message: "Sorry, you are not old enough to create product",
            });
        }
    };
};

.post(canAddProduct("customer"),createProductController)

make a middleware pass age and status
if age is greater than 20 and status is married, he can create a product
else throw error

let canAddProduct = (age , status) => {
    return (req, res, next) => {
        if (age > 20 && status === "married") {
            return next();
        }
        else {
            res.status(400).json({
                success: false,
                message: "Sorry, you are not old enough to create product",
            });
        }
    };
};

.post(canAddProduct("customer","married"),createProductController)
*/
