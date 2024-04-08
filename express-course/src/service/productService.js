import { Product } from "../model/model.js";

export let createProductService = async (data) => {
  return await Product.create(data);
};
export let readAllProductService = async () => {
  return await Product.find({});
};
export let readAllSpecificProductService = async (id) => {
  return await Product.findById(id);
};
export let updateProductService = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, {
    new: true, // by default shows false which is old data)
  });
};
export let deleteProductService = async (id) => {
  return await Product.findByIdAndDelete(id);
};
