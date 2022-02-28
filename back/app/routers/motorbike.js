const express = require('express');
const motorbikeController = require('../controllers/motorbikeController');

const router = express.Router();

router.route('/')
  .get(motorbikeController.findAll)
  .post(motorbikeController.new);

router.route('/:id')
  .get(motorbikeController.findOne)
  .patch(motorbikeController.update)
  .delete(motorbikeController.delete);

module.exports = router;
