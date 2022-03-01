const express = require('express');
const pictureController = require('../controllers/pictureController');
const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

router.route('/')
  .get(controllerHandler(pictureController.findAll))
  .post(controllerHandler(pictureController.new));

router.route('/:id')
  .get(controllerHandler(pictureController.findOne))
  .patch(controllerHandler(pictureController.update))
  .delete(controllerHandler(pictureController.delete));

module.exports = router;
