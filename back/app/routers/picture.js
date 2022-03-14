const express = require('express');

const pictureController = require('../controllers/pictureController');
const authenticateToken = require('../helpers/auth');

const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

// Routes de récupération de tous les images et d'ajout d'une image
router.route('/')
  .get(authenticateToken, (controllerHandler(pictureController.findAll)))
  .post(authenticateToken, (controllerHandler(pictureController.new)));

// Routes de récupération, de mise à jour ou de suppression d'1 image
router.route('/:id')
  .get(authenticateToken, (controllerHandler(pictureController.findOne)))
  .patch(authenticateToken, (controllerHandler(pictureController.update)))
  .delete(authenticateToken, (controllerHandler(pictureController.delete)));

module.exports = router;

/**
 * GET /images
 * @summary Get all pictures
 * @tags Pictures - Picture management
 * @return {array<Picture>} 200 - Pictures array
 * @return {object} 404 - Input data invalid
 */

/**
 * POST /images
 * @summary Send new word and get a picture
 * @tags Pictures - Picture management
 * @param {string} body.required - the first part of a sentencesentence
 * @return {Picture} 200 - picture object
 * @return {object} 404 - Input data invalid
*/

/**
 * GET /images/{id}
 * @summary Get a one picture
 * @tags Pictures - Picture management
 * @param {number} id.path.required - the first part of a sentence
 * @return {Picture} 200 - picture object
 * @return {object} 404 - Input data invalid
 */

/**
 * PATCH /images/{id}
 * @summary Update a picture
 * @tags Pictures - Picture management
 * @param {number} id.path.required - the first part of a sentence
 * @return {Picture} 200 - picture object
 * @return {object} 404 - Input data invalid
 */

/**
 * DELETE /images/{id}
 * @summary Delete a picture
 * @tags Pictures - Picture management
 * @param {number} id.path.required - the first part of a sentence
 * @return {object} 404 - Input data invalid
 */
