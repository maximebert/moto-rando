const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string(),
  latitude: Joi.number().integer(),
  longitude: Joi.number().integer(),
  zoom: Joi.number().integer(),
});
