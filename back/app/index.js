// APPLICATION EXPRESS
/*
Désormais notre application est un module qui est exporté, afin de pouvoir require notre application dans différents environnement
*/
const express = require('express');

const router = require('./routers');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(router);

module.exports = app;
