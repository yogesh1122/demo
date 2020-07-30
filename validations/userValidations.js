const Joi = require("joi");

exports.addValidation = (user) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(3).max(255).required(),
    contactNo: Joi.string().required(),
    gender: Joi.string().required(),
    address: Joi.string().min(3).max(255).required(),
  });
  return schema.validate(user);
};

exports.updateValidation = (user) => {
  const schema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().min(2).max(50),
    email: Joi.string().min(5).max(255).email(),
    password: Joi.string().min(3).max(255),
    contactNo: Joi.string(),
    gender: Joi.string(),
    address: Joi.string().min(3).max(255),
  });
  return schema.validate(user);
};
