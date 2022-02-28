const express = require('express');
const itinaryController = require('../controllers/itinaryController');

const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

router.route('/')
  .get(controllerHandler(itinaryController.findAll))
  .post(controllerHandler(itinaryController.new));

router.route('/:id')
  .get(controllerHandler(itinaryController.findOne))
  .patch(controllerHandler(itinaryController.update))
  .delete(controllerHandler(itinaryController.delete));

module.exports = router;
