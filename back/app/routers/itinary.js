const express = require('express');
const { itinaryController } = require('../controllers');

const router = express.Router();

router.use('/itinary')
  .get(itinaryController.findAll)
  .post(itinaryController.new);

router.use('/itinary/:id')
  .get(itinaryController.findOne)
  .patch(itinaryController.update)
  .delete(itinaryController.delete);

router.use('/', itinaryController.findSix);

module.exports = router;
