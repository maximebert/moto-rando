const Joi = require('joi');

module.exports = Joi.object({
  alias: Joi.string().alphanum().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().alphanum().min(3).required(),
  confirmPassword: Joi.ref('password').required(),
  presentation: Joi.string().alphanum().min(3).max(50),

});
