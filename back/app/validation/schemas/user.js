const Joi = require('joi');

module.exports = Joi.object({
  alias: Joi.string().alphanum().min(3),
  email: Joi.string().email(),
  password: Joi.string().min(3),
  confirmPassword: Joi.ref('password'),
  presentation: Joi.string().min(3).max(50),

});
