const express = require('express');
const itinaryController = require('../controllers/itinaryController');

const router = express.Router();

router.route('/')
  .get(itinaryController.findAll)
  .post(itinaryController.new);

router.route('/:id')
  .get(itinaryController.findOne)
  .patch(itinaryController.update)
  .delete(itinaryController.delete);

module.exports = router;
