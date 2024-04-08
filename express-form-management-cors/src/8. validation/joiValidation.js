import Joi from "joi";

const validation = Joi.object
  .key({
    fullName: Joi.string().required().min(3).max(25),

    email: Joi.string()
      .required()
      .custom((value, msg) => {
        // regex pattern for email = ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
        let validEmail = value.match(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        );
        if (validEmail) {
          return true;
        } else {
          return msg.message(
            "Email is not valid. Please enter the right email pattern."
          );
        }
      }),

    password: Joi.string()
      .required()
      .custom((value, msg) => {
        // regex pattern for password = ^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$
        let validPassword = value.match(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/
        );
        let missingRequirements = []; //an empty array to push missing elements (add from last) from the code below

        if (!validPassword) {
          if (!/[A-Z]/.test(value)) {
            missingRequirements.push("Uppercase");
          }
          if (!/[a-z]/.test(value)) {
            missingRequirements.push("Lowercase");
          }
          if (!/\d/.test(value)) {
            missingRequirements.push("Number");
          }
          if (!/[@$!%*#?&]/.test(value)) {
            missingRequirements.push("Special Character");
          }
          if (value.length < 8) {
            missingRequirements.push("Minimum Character: 8");
          }
          if (value.length > 15) {
            missingRequirements.push("Maximum Character: 15");
          }
          // convert the populated array into string and output it
          return msg.message(
            `Password must contain the following: ${missingRequirements.join(", ")}`
          );
        } else {
          return true;
        }
      }),

    dob: Joi.date().required(),

    gender: Joi.string().required().valid("male", "female", "other"),

    role: Joi.string().required().valid("user", "admin", "superadmin"),

    isVerifiedEmail: Joi.string().required(),
  })
  .unknown(false); // If false unknown fields not defined in validation are not allowed
