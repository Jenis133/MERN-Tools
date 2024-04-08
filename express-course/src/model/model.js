/* 
define array => name, object
Student = [
    {name:"nitan", age:29, isMarried:false}
]
 */
import { model } from "mongoose";
import bookSchema from "../schema/bookSchema.js";
import classroomSchema from "../schema/classroomSchema.js";
import collegeSchema from "../schema/collegeSchema.js";
import departmentSchema from "../schema/departmentSchema.js";
import studentSchema from "../schema/studentSchema.js";
import teacherSchema from "../schema/teacherSchema.js";
import traineeSchema from "../schema/traineeSchema.js";
import productSchema from "../schema/productSchema.js";
import userSchema from "../schema/userSchema.js";
import reviewSchema from "../schema/reviewSchema.js";

export let Book = model("Book", bookSchema); // First letter capital and singular, must be same as string.
export let Classroom = model("Classroom", classroomSchema);
export let College = model("College", collegeSchema);
export let Department = model("Department", departmentSchema);
export let Student = model("Student", studentSchema);
export let Teacher = model("Teacher", teacherSchema);
export let Trainee = model("Trainee", traineeSchema);
export let Product = model("Product", productSchema);
export let User = model("User", userSchema);
export let Review = model("Review", reviewSchema);
