const { ApiError } = require('../helpers/errorHandler');

module.exports = (schema, dataSource) => async (req, res, next) => {
  try {
    await schema.validateAsync(req[dataSource]);
    next();
  } catch (err) {
    next(new ApiError(400, err.details[0].message));
    res.status(400).json({ error: err.details[0].message });
  }
};
