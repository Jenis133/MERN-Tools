import { Teacher } from "../model/model.js";

export let createTeacherService = async (data) => {
  return await Teacher.create(data);
};
export let readAllTeacherService = async () => {
  return await Teacher.find({});
};
export let readAllSpecificTeacherService = async (id) => {
  return await Teacher.findById(id);
};
export let updateTeacherService = async (id, data) => {
  return await Teacher.findByIdAndUpdate(id, data, {
    new: true, // by default shows false which is old data)
  });
};
export let deleteTeacherService = async (id) => {
  return await Teacher.findByIdAndDelete(id);
};
