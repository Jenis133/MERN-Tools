import { User } from "../3. model/model.js";

export const createUserService = async (data) => {
  return await User.create(data);
};
export const readUserService = async () => {
  return await User.find({});
};
export const readSpecificUserService = async (id) => {
  return await User.findById(id);
};
export const updateUserService = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, {
    new: true, // returns updated data for patch/put method.
  });
};
export const deleteUserService = async (id) => {
  return await User.findByIdAndDelete(id);
};

export const verifyEmailService = async (userId, data) => {
  return await User.findByIdAndUpdate(userId, data, {
    new: true, // returns updated data for patch/put method.
  });
};
