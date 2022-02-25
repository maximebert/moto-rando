const express = require('express');
const { pictureController } = require('../controllers');

const router = express.Router();

router.get('/', pictureController.find);

module.exports = router;
