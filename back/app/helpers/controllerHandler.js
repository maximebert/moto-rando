const ApiError = require('../errors/apiError');

/**
 * Controller wrapper to manage errors
 * @param {object} controller a controller to execute iside a try… catch… block
 * @returns {object} a controller as middleware function
 */
module.exports = (controller) => async (req, res, next) => {
  try {
    await controller(req, res, next);
  } catch (err) {
    // console.log(err);
    const apiError = new ApiError(err.statusCode, err.message);
    next(apiError);
  }
};
