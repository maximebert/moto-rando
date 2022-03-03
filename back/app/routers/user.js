const express = require('express');
const userController = require('../controllers/userController');
const connectController = require('../controllers/connectController');

const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

router.post('/connexion', connectController.connexion);

router.route('/:id')
  .get(controllerHandler(userController.findOne))
  .patch(controllerHandler(userController.update))
  .delete(controllerHandler(userController.delete));

router.route('/inscription')
  .post(userController.inscription);
module.exports = router;

/**
 * * POST(/connexion)
     * @summary user authentication
     * @tags Store - Routes to authenticate a user
     * @param {string} body.required - the first part of a sentence
     * @returns {userController} 200 - user object
     * @returns {Error} 500 - Input data invalid
 */
/**
 * * GET(/:id)
     * @summary Get a one user
     * @tags Generate - Routes to get one user
     * @param {string} request.query - the first part of a sentence
     * @returns {userController} 200 - user object
     * @returns {Error} 404 - Input data invalid
 */
/**
 * * PATCH(/:id)
     * @summary Update a user
     * @tags Generate - Routes to get one user
     * @param {string} request.query - the first part of a sentence
     * @returns {pictureController} 200 - user object
     * @returns {Error} 404 - Input data invalid
 */
/**
 * * DELETE(/:id)
     * @summary delete a one picture
     * @tags Generate - Routes to deleting a user
     * @param {string} request.query - the first part of a sentence
     * @returns {pictureController} 200 - user object
     * @returns {Error} 404 - Input data invalid
 */
/**
 * * POST(/inscription)
     * @summary Send new word and get a user
     * @tags Store - Routes to use to register a user
     * @param {string} body.required - the first part of a sentence
     * @returns {pictureController} 200 - user object
     * @returns {Error} 404 - Input data invalid
 */
