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
     * @returns {itineraryController} 200 - itinerary object
     * @returns {Error} 404 - Input data invalid
 */

/**
 * * POST
     * @summary Send new word and get a picture
     * @tags Store - Routes to save end get a itinerary
     * @param {string} body.required - the first part of a sentencesentence
     * @returns {itineraryController} 200 - itinerary object
     * @returns {Error} 404 - Input data invalid

 */
/**
 * * GET(/:id)
     * @summary Get a one picture
     * @tags Generate - Routes to get one itinerary
     * @param {string} request.query - the first part of a sentence
     * @returns {itineraryController} 200 - itinerary object
     * @returns {Error} 404 - Input data invalid
 */
/**
 * * PATCH(/:id)
     * @summary Get a one picture
     * @tags Generate - Routes to get one itinerary
     * @param {string} request.query - the first part of a sentence
     * @returns {itineraryController} 200 - itinerary object
     * @returns {Error} 404 - Input data invalid
 */
/**
 * * DELETE(/:id)
     * @summary delete a one picture
     * @tags Generate - deleting a route
     * @param {string} request.query - the first part of a sentence
     * @returns {itineraryController} 204 - itinerary object
     * @returns {Error} 404 - Input data invalid
 */
