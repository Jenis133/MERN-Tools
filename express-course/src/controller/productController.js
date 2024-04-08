import {
  createProductService,
  deleteProductService,
  readAllProductService,
  readAllSpecificProductService,
  updateProductService,
} from "../service/productService.js";

export let createProductController = async (req, res, next) => {
  try {
    const result = await createProductService(req.body); //posts in mongodb
    res.status(201).json({
      // post is 201
      success: true,
      message: "Post method: Product created successfully",
      result: result, // use await for this part // add async if await is used.
    });
  } catch (error) {
    res.status(400).json({
      success: true,
      message: error.message,
    });
  }
  /*     let result = await Product.create(data);
    res.json({
        success: true,
        message: "Post method: Product created successfully",
        result: result,
    }); */
};

export let readAllProductController = async (req, res, next) => {
  try {
    const result = await readAllProductService();
    res.status(200).json({
      // read is 200
      success: true,
      message: "Get method: Product read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readAllSpecificProductController = async (req, res, next) => {
  try {
    const result = await readAllSpecificProductService(req.params.id); // gets dynamic id
    res.status(200).json({
      // read is 200
      success: true,
      message: "Product read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updateProductController = async (req, res, next) => {
  try {
    const result = await updateProductService(req.params.id, req.body, {
      new: true, // by default shows false which is old data
    });
    res.status(201).json({
      // update is 201
      success: true,
      message: "Product update successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteProductController = async (req, res, next) => {
  try {
    const result = await deleteProductService(req.params.id);
    res.status(200).json({
      // delete is 200
      success: true,
      message: "Product deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
