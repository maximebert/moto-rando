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
