const express = require('express');

const itineraryController = require('../controllers/itineraryController');
// const authenticateToken = require('../helpers/auth');
// Il est prévu d'ajouter la validation des données via Joi et les schemas

const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

// Routes de récupération de tous les itinéraires et d'ajout d'itinéraire
router
  .route('/')
  .get(controllerHandler(itineraryController.findAll))
  .post(
    controllerHandler(itineraryController.upload),
    controllerHandler(itineraryController.new),
  );

// Routes de récupération, de mise à jour ou de suppression d'1 itinéraire
router
  .route('/:id')
  .get(controllerHandler(itineraryController.findOne))
  .patch(controllerHandler(itineraryController.update))
  .delete(controllerHandler(itineraryController.delete));

module.exports = router;

/**
 *  * GET
 * @summary Get a itinerary
 * @tags Generate - Routes to get all itinerary
 * @param {string} request.query - the first part of a sentence
 * @returns {itineraryController} 200 - itinerary object
 * @returns {Error} 404 - Input data invalid
 */

/**
 * * POST
     * @summary Send new word and get a itinerary
     * @tags Store - Routes to save end get a itineraries
     * @param {string} body.required - the first part of a sentence
     * @returns {itineraryController} 200 - itinerary object
     * @returns {Error} 404 - Input data invalid

 */
/**
 * * GET(/:id)
 * @summary Get a one itinerary
 * @tags Generate - Routes to get one itinerary
 * @param {string} request.query - the first part of a sentence
 * @returns {itineraryController} 200 - itinerary object
 * @returns {Error} 404 - Input data invalid
 */
/**
 * * PATCH(/:id)
 * @summary update one itinerary
 * @tags Generate - Routes to update one itinerary
 * @param {string} request.query - the first part of a sentence
 * @returns {itineraryController} 200 - itinerary object
 * @returns {Error} 404 - Input data invalid
 */
/**
 * * DELETE(/:id)
 * @summary delete a one itinary
 * @tags Generate -Routes to deleting a itinerary
 * @param {string} request.query - the first part of a sentence
 * @returns {itineraryController} 204 - itinerary object
 * @returns {Error} 404 - Input data invalid
 */
