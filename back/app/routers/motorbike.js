const express = require('express');
const motorbikeController = require('../controllers/motorbikeController');

// Il est prévu d'ajouter la validation des données via Joi et les schemas
const validate = require('../validation');
const motorbikeSchema = require('../validation/schemas/motorbike');
const controllerHandler = require('../helpers/controllerHandler');
const authenticateToken = require('../helpers/auth');

const router = express.Router();

// Routes de récupération de tous les motos et d'ajout d'une moto
router.route('/')
  .get(authenticateToken, (validate(motorbikeSchema, 'query'), controllerHandler(motorbikeController.findAll)))
  .post(authenticateToken, (validate(motorbikeSchema, 'body'), controllerHandler(motorbikeController.new)));

// Routes de récupération, de mise à jour ou de suppression d'1 moto
router.route('/:id')
  .get(authenticateToken, (validate(motorbikeSchema, 'query'), controllerHandler(motorbikeController.findOne)))
  .patch(authenticateToken, (validate(motorbikeSchema, 'body'), controllerHandler(motorbikeController.update)))
  .delete(authenticateToken, (validate(motorbikeSchema, 'query'), controllerHandler(motorbikeController.delete)));

module.exports = router;

/**
 * GET /motos
 * @summary Get all motorbikes
 * @tags Motorbikes - Motorbikes management
 * @return {array<Motorbike>} 200 - motorbike object (ok)
 */

/**
 * POST /motos
 * @summary Send new word and get a motorbike
 * @tags Motorbikes - Motorbikes management
 * @param {string} body.required - the first part of a sentencesentence
 * @return {Motorbike} 201 - motorbike object (ok)

 */
/**
 * GET /motos/{id}
 * @summary Get a one motorbike
 * @tags Motorbikes - Motorbikes management
 * @param {number} id.path.required- the first part of a sentence
 * @return {Motorbike} 200 - motorbike object (ok)
 * @return {object}

 */
/**
 * PATCH /motos/{id}
 * @summary Update one itinary
 * @tags Motorbikes - Motorbikes management
 * @param {number} id.path.required - the first part of a sentence
 * @return {Motorbike} 200 - motorbike object (ok)
 * @return {object} 404 - Input data invalid

 */
/**
 * DELETE /motos/{id}
 * @summary delete a one motorbike
 * @tags Motorbikes - Motorbikes management
 * @param {number} id.path.required- the first part of a sentence
 */
