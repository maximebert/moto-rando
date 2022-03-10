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
 * GET /itineraires
 * @summary Get all itineraries
 * @tags itineraires - itinerary management
 * @returns {itinerary} 200 - itinerary object
 * @returns {Error} 404 - Input data invalid
 */

/**
 * POST /itineraire
 * @summary Send new word and get a itinerary
 * @tags Itineraires - itinerary management
 * @param {string} body.required - the first part of a sentence
 * @returns {itinerary} 200 - itinerary object
 * @returns {error} 404 - Input data invalid

 */
/**
* GET /itineraires/{id}
 * @summary Get a one itinerary
 * @tags Itineraires - itinerary management
 * @param {string} id.path.required - the first part of a sentence
 * @returns {itinerary} 200 - itinerary object
 * @returns {Error} 404 - Input data invalid
 */
/**
 * PATCH /itineraire/{id}
 * @summary update one itinerary
 * @tags Itineraires - itinerary management
 * @param {number} id.path.required - the first part of a sentence
 * @returns {itinerary} 200 - itinerary object
 * @returns {Error} 404 - Input data invalid
 */
/**
 * * DELETE /itineraire/{id}
 * @summary delete a one itinary
 * @tags itineraires - itinerary management
 * @param {number} id.path.required - the first part of a sentence
 * @returns {itinerary} 204 - itinerary object
 * @returns {Error} 404 - Input data invalid
 */
