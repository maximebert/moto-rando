const express = require('express');
const { motorbikeController } = require('../controllers');

const router = express.Router();

router.get('/', motorbikeController.find);

module.exports = router;
