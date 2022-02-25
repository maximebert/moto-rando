const express = require('express');

const userRouter = require('./user');
const itinaryRouter = require('./itinary');
// const motorbikeRouter = require('./motorbike');
// const pictureRouter = require('./picture');

const router = express.Router();

router.use('/profil', userRouter);

router.use('/', itinaryRouter);

// router.use('/', motorbikeRouter);

// router.use('/', pictureRouter);

module.exports = router;
