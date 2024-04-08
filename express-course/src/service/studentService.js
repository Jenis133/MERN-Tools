import { Student } from "../model/model.js";

export let createStudentService = async (data = {}) => await Student.create(data);

export let readAllStudentService = async (query = {}, sort=null, skip=0, limit=10) => {
  // we cannot use "" as default value for sort because of some fucking bug
  // return await Student.find({}); // If empty gives all data
  // query = {name:"Sid"}
  return await Student.find(query).sort(sort).skip(skip).limit(limit);
  // return await Student.find({name: "sid"})

  // If passed an entry then gives only entered data
  // find has control over the object

  // .select("name password phoneNumber -_id");

  // select has control over the object property
  // .select only displays whatever is passed and hides the remaining data
  // If "-" is passed then it does not display whatever is minused, example -_id.
  // We cannot use minus and plus simultaneously except _id.
  // This displays on get post in postman
};
export let readAllSpecificStudentService = async (id="") => {
  return await Student.findById(id);
};
export let updateStudentService = async (id="", data={}) => {
  return await Student.findByIdAndUpdate(id, data, {
    new: true, // by default shows false which is old data)
  });
};
export let deleteStudentService = async (id="") => {
  return await Student.findByIdAndDelete(id);
};

/* 
let a = () => {
    return "string";
};
or can be written as
let a = () => "string";

let b = () => {
    return [a,b];
};
or can be written as
let b = () => [a,b];

In the method above if there is only one line of code inside block,
then you can remove the block braces i.e ({}).
It also returns by default so no need to write return.


*/
