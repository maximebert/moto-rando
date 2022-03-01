const express = require('express');
const itineraryController = require('../controllers/itineraryController');

const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

router.route('/')
  .get(controllerHandler(itineraryController.findAll))
  .post(controllerHandler(itineraryController.new));

router.route('/:id')
  .get(controllerHandler(itineraryController.findOne))
  .patch(controllerHandler(itineraryController.update))
  .delete(controllerHandler(itineraryController.delete));

module.exports = router;
