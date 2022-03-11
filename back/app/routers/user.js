const express = require('express');
const userController = require('../controllers/userController');
const connectController = require('../controllers/connectController');

// Il est prévu d'ajouter la validation des données via Joi et les schemas

const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

// Route de de connexion d'un utilisateur

router.post('/connexion', connectController.connexion);

// Routes de récupération, de mise à jour ou de suppression d'1 utilisateur
router.route('/:id')
  .get(controllerHandler(userController.findOne))
  .patch(controllerHandler(userController.update))
  .delete(controllerHandler(userController.delete));

// Route d'inscription
router.route('/inscription')
  .post(userController.inscription);

module.exports = router;

/**
* POST /profil/connexion
* @summary User authentication
* @tags User - User management
* @param {string} body.required - the first part of a sentence
* @return {User} 200 - user object
* @return {object} 500 - Input data invalid
*/

/**
* GET /profil/{id}
* @summary Get a one user
* @tags User - User management
* @param {number} id.path.required - the first part of a sentence
* @return {User} 200 - user object
* @return {object} 404 - Input data invalid
*/

/**
* PATCH /profil/{id}
* @summary Update a user
* @tags User - User management
* @param {number} id.path.required - the first part of a sentence
* @return {User} 200 - user object
* @return {object} 404 - Input data invalid
*/

/**
 * DELETE /profil/{id}
* @summary Delete a one picture
* @tags User - User management
* @param {number} id.path.required - the first part of a sentence
* @return {object} 404 - Input data invalid
*/

/**
 * POST /profil/inscription
* @summary Send new word and get a user
* @tags User - User management
* @param {string} alias - Username
* @param {string} email - Email
* @param {string} password - Password
* @param {string} confirmPassword - Confirm password
* @return {User} 200 - user object
* @return {object} 404 - Input data invalid
*/
