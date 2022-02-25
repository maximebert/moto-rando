const express = require('express');

const userRouter = require('./user');
const pictureRouter = require('./picture');
const itinaryRouter = require('./itinary');
const motorbikeRouter = require('./motorbike');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const router = express.Router();

router.use('/', userRouter);

router.use('/', itinaryRouter);

router.use('/', motorbikeRouter);

router.use('/', pictureRouter);

module.exports = app;
