import { config } from "dotenv";

config(); // initialize dotenv

export let email = process.env.EMAIL;
export let password = process.env.PASSWORD;
export let secretKey = process.env.SECRET_KEY;

export const port = process.env.PORT;
export const dbUrl = process.env.DB_URL;
