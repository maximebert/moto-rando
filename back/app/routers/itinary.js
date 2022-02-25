const express = require('express');
const { itinaryController } = require('../controllers');

const router = express.Router();

router.use('/itinary')
  .get(itinaryController.findAll)
  .post(itinaryController.create);

router.use('/itinary/:id')
  .get(itinaryController.findByPk)
  .patch(itinaryController.patch)
  .delete(itinaryController.delete);

router.use('/', itinaryController.findSix);

module.exports = router;
