import { model } from "mongoose";
import userSchema from "../schema/userSchema.js";

export let User = model("User", userSchema); // First letter capital and singular, must be same as string.
