const Joi = require('joi');

module.exports = Joi.object({
  title: Joi.string().min(3).required(),
  description: Joi.string().alphanum().min(3).max(255),
  hour: Joi.number().integer().required(),
  minute: Joi.number().integer().max(59).required(),
  highway: Joi.boolean().required(),
  kilometer: Joi.number().integer().required(),
  curve: Joi.number().integer().min(1).max(5),
  trace: Joi.string().required(),
  user_id: Joi.number().integer().required(),
  district_id: Joi.number().integer().required(),
});
