const Joi = require('joi');

module.exports = Joi.object({
  brand: Joi.string().min(2).max(20),
  model: Joi.string().alphanum().min(3).max(20),
  description: Joi.string().min(3).max(60),
  user_id: Joi.number().integer(),
});
