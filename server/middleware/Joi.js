const Joi = require("joi");

async function validation(req, res, next) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const roles = ["customer", "admin"];

  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string()
      .pattern(emailRegex)
      .error(new Error("Email should be correct"))
      .required(),
    password: Joi.string().min(8).max(32).required(),
    role: Joi.string()
      .valid(...roles)
      .required(),
    contactNumber: Joi.string()
      .min(6)
      .max(12)
      .error(new Error("Phone number should not be more than 12 characters")),
  });

  try {
    console.log("req.body", req.body);
    await schema.validateAsync(req.body);
    next();
  } catch (error) {
    return res
      .status(402)
      .json({ error: error.message, message: "Input data not correct" });
  }
}

module.exports = validation;
