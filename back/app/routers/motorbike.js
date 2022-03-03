const express = require('express');
const motorbikeController = require('../controllers/motorbikeController');

// Il est prévu d'ajouter la validation des données via Joi et les schemas

const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

// Routes de récupération de tous les motos et d'ajout d'une moto
router.route('/')
  .get(controllerHandler(motorbikeController.findAll))
  .post(controllerHandler(motorbikeController.new));

// Routes de récupération, de mise à jour ou de suppression d'1 moto
router.route('/:id')
  .get(controllerHandler(motorbikeController.findOne))
  .patch(controllerHandler(motorbikeController.update))
  .delete(controllerHandler(motorbikeController.delete));

module.exports = router;

/**
 *  * GET /findAll
     * @summary Get all motorbikes
     * @tags Generate - Routes to get all motorbikes
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
     * @summary Update one itinary
     * @tags Generate - Generate - Routes to get one motorbike
     * @param {string} request.query - the first part of a sentence
     * @returns {motorbike} 200 - motorbike object (ok)

 */
/**
 * * DELETE(/:id)
     * @summary delete a one motorbike
     * @tags Generate - Generate - Routes to get deleting one motorbike
     * @param {string} request.query - the first part of a sentence
     * @returns {motorbike} 200 - motorbike object (ok)

 */
