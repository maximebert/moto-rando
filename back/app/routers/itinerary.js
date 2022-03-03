const express = require('express');
const itineraryController = require('../controllers/itineraryController');

// Il est prévu d'ajouter la validation des données via Joi et les schemas

const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

// Routes de récupération de tous les itinéraires et d'ajout d'itinéraire
router.route('/')
  .get(controllerHandler(itineraryController.findAll))
  .post(controllerHandler(itineraryController.new));

// Routes de récupération, de mise à jour ou de suppression d'1 itinéraire
router.route('/:id')
  .get(controllerHandler(itineraryController.findOne))
  .patch(controllerHandler(itineraryController.update))
  .delete(controllerHandler(itineraryController.delete));

module.exports = router;
