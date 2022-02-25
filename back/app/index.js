const express = require('express');

const {
  userRouter, pictureRouter, itinaryRouter, motorbikeRouter,
} = require('./routers');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const router = express.Router();

router.use('/', userRouter);

router.use('/', itinaryRouter);

router.use('/', motorbikeRouter);

router.use('/', pictureRouter);

module.exports = app;
