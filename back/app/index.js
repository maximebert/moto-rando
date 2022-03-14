// APPLICATION EXPRESS
// const path = require('path');

const cors = require('cors');

const express = require('express');

const fileUpload = require('express-fileupload');

const router = require('./routers');

const app = express();
require('./helpers/apiDocs')(app);

app.use(
  fileUpload({
    createParentPath: true,
  }),
);

app.use(express.json());

// TODO : Levée de la restriction des Cors à configurer
app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(router);

module.exports = app;
