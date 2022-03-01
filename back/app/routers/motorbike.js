const express = require('express');
const motorbikeController = require('../controllers/motorbikeController');
const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

router.route('/')
  .get(controllerHandler(motorbikeController.findAll))
  .post(controllerHandler(motorbikeController.new));

router.route('/:id')
  .get(controllerHandler(motorbikeController.findOne))
  .patch(controllerHandler(motorbikeController.update))
  .delete(controllerHandler(motorbikeController.delete));

module.exports = router;
