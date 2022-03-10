const express = require('express');

const pictureController = require('../controllers/pictureController');

// Il est prévu d'ajouter la validation des données via Joi et les schemas

const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

// Routes de récupération de tous les images et d'ajout d'une image
router.route('/')
  .get(controllerHandler(pictureController.findAll))
  .post(controllerHandler(pictureController.new));

// Routes de récupération, de mise à jour ou de suppression d'1 image
router.route('/:id')
  .get(controllerHandler(pictureController.findOne))
  .patch(controllerHandler(pictureController.update))
  .delete(controllerHandler(pictureController.delete));

module.exports = router;

/**
 * GET /images
 * @summary Get all pictures
 * @tags Pictures - Picture management
 * @returns {array} 200 - Pictures array
 * @returns {Error} 404 - Input data invalid
 */

/**
 * POST /image
 * @summary Send new word and get a picture
 * @tags Pictures - Picture management
 * @param {string} body.required - the first part of a sentencesentence
 * @returns {Picture} 200 - picture object
 * @returns {Error} 404 - Input data invalid
*/

/**
 * GET /images/{id}
 * @summary Get a one picture
 * @tags Pictures - Picture management
 * @param {number} id.path.required - the first part of a sentence
 * @returns {Picture} 200 - picture object
 * @returns {Error} 404 - Input data invalid
 */

/**
 * PATCH /images/{id}
 * @summary Update a picture
 * @tags Pictures - Picture management
 * @param {number} id.path.required - the first part of a sentence
 * @returns {Picture} 200 - picture object
 * @returns {Error} 404 - Input data invalid
 */

/**
 * DELETE /images/{id}
 * @summary Delete a picture
 * @tags Pictures - Picture management
 * @param {number} id.path.required - the first part of a sentence
 * @returns {Error} 404 - Input data invalid
 */
