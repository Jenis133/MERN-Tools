import Joi from "joi";

// instantiate Joi
const validation = Joi.object().keys({
    entry: Joi.number().required()
    .custom((value, msg) => {
        if (value >= 1 && value < 100) {
            return true;
        }
        else {
            return msg.message("Entry number must be between 1 - 100");
        }
    }),

    name:Joi.string().required().min(3).max(25),

    age: Joi.number().required()
    .custom((value, msg)=>{
        if (value >= 18 && value <= 60) {
            return true;
        }
        else if (value > 60) {
            return msg.message("Age must be at most 60 or below");
        }
        else {
            return msg.message("Age must be at least 18");
        }
    }),
    // .min(18).max(60),

    isMarried: Joi.boolean().required(),

    dateOfBirth: Joi.date().required(),

    gender: Joi.string().required().valid("male","female","other"),

    nationality: Joi.string().required(),

    address: Joi.string().required(),

    phoneNumber: Joi.number().required()
    .custom((value, msg) => {
        if (value >= 1000000000 && value <= 9999999999) {
            return true;
        }
        else {
            return msg.message("Phone number must be exactly 10 digits");
        }
    }),

    email: Joi.string().required()
    .custom((value, msg) => {
        // regex pattern for email = ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
        let validEmail = value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
        if (validEmail) {
            return true;
        }
        else {
            return msg.message("Email is not valid. Please enter the right email pattern.");
        }
    }),

    userName: Joi.string().required(),

    password: Joi.string().required()
    .custom((value, msg) => {
        // regex pattern for password = ^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$
        let validPassword = value.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/);
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
            return msg.message(`Password must contain the following: ${missingRequirements.join(", ")}`);
        } 
        else {
            return true;
        }      
    }),

    programmingLanguage: Joi.array().items(Joi.object().keys({
        language: Joi.string().required(),
        framework: Joi.string().required(),
    })),
}).unknown(false); // False value does not allow other fields that are not defined in validation else true.

export default validation;