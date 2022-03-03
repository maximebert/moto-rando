const express = require('express');
const pictureController = require('../controllers/pictureController');
const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

router.route('/')
  .get(controllerHandler(pictureController.findAll))
  .post(controllerHandler(pictureController.new));

router.route('/:id')
  .get(controllerHandler(pictureController.findOne))
  .patch(controllerHandler(pictureController.update))
  .delete(controllerHandler(pictureController.delete));

module.exports = router;

/**
 *  * GET /
     * @summary Get a picture
     * @tags Generate - Routes to get all pictures
     * @param {string} request.query - the first part of a sentence
     * @returns {pictureController} 200 - picture object
     * @returns {Error} 404 - Input data invalid
 */

/**
 * * POST
     * @summary Send new word and get a picture
     * @tags Store - Routes to save end get a itinerary
     * @param {string} body.required - the first part of a sentencesentence
     * @returns {pictureController} 200 - picture object
     * @returns {Error} 404 - Input data invalid

 */
/**
 * * GET(/:id)
     * @summary Get a one picture
     * @tags Generate - Routes to get one picture
     * @param {string} request.query - the first part of a sentence
     * @returns {pictureController} 200 - picture object
     * @returns {Error} 404 - Input data invalid
 */
/**
 * * PATCH(/:id)
     * @summary Update a picture
     * @tags Generate - Generate - Routes to get update one picture
     * @param {string} request.query - the first part of a sentence
     * @returns {pictureController} 200 - picture object
     * @returns {Error} 404 - Input data invalid
 */
/**
 * * DELETE(/:id)
     * @summary Delete a picture
     * @tags Generate - Routes to deleting a picture
     * @param {string} request.query - the first part of a sentence
     * @returns {pictureController} 200 - picture object
     * @returns {Error} 404 - Input data invalid
 */
