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
