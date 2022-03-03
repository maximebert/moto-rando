const express = require('express');
const motorbikeController = require('../controllers/motorbikeController');
const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

router.route('/')
  .get(controllerHandler(motorbikeController.findAll))
  .post(controllerHandler(motorbikeController.new));

router.route('/:id')
  .get(controllerHandler(motorbikeController.findOne))
  .patch(controllerHandler(motorbikeController.update))
  .delete(controllerHandler(motorbikeController.delete));

module.exports = router;

/**
 *  * GET /findAll
     * @summary Get a motorbike
     * @tags Generate - Routes to get all motorbike
     * @param {string} request.query - the first part of a sentence
     * @returns {motorbike} 200 - motorbike object (ok)
 */

/**
 * * POST /new
     * @summary Send new word and get a motorbike
     * @tags Store - Routes to save end get a motorbike
     * @param {string} body.required - the first part of a sentencesentence
     * @returns {motorbike} 200 - motorbike object (ok)

 */
/**
 * * GET(/:id)
     * @summary Get a one motorbike
     * @tags Generate - Routes to get one motorbike
     * @param {string} request.query - the first part of a sentence
     * @returns {motorbike} 200 - motorbike object (ok)

 */
/**
 * * PATCH(/:id)
     * @summary Get a one itinary
     * @tags Generate - Update a motorbike
     * @param {string} request.query - the first part of a sentence
     * @returns {motorbike} 200 - motorbike object (ok)

 */
/**
 * * DELETE(/:id)
     * @summary delete a one motorbike
     * @tags Generate - Deleting a motorbike
     * @param {string} request.query - the first part of a sentence
     * @returns {motorbike} 200 - motorbike object (ok)

 */
