const express = require('express');
const { itinaryController } = require('../controllers');

const router = express.Router();

router.get('/', itinaryController.findAll);

module.exports = router;
