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
