const Joi = require('joi');

module.exports = Joi.object({
  title: Joi.string().min(2).max(20),
  description: Joi.string().min(2).max(20),
  link: Joi.string(),
  user_id: Joi.number().integer(),
  motorbike_id: Joi.number().integer(),
  itinerary_id: Joi.number().integer(),
});
