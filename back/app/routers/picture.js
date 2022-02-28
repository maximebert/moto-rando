const express = require('express');
const pictureController = require('../controllers/pictureController');

const router = express.Router();

router.route('/')
  .get(pictureController.findAll)
  .post(pictureController.new);

router.route('/:id')
  .get(pictureController.findOne)
  .patch(pictureController.update)
  .delete(pictureController.delete);

module.exports = router;
