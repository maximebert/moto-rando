const express = require('express');
const { itinaryController } = require('../controllers');

const router = express.Router();

router.use('/')
  .get(itinaryController.findAll)
  .post(itinaryController.new);

router.use('/:id')
  .get(itinaryController.findOne)
  .patch(itinaryController.update)
  .delete(itinaryController.delete);

module.exports = router;
