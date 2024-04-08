import { model } from "mongoose";
import userSchema from "../2. schema/userSchema.js";

// Model name must start with Capital letter and must be singular.
export const User = model("User", userSchema);
