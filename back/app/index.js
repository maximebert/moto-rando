// APPLICATION EXPRESS
/*
Désormais notre application est un module qui est exporté, afin de pouvoir require notre application dans différents environnement
*/
const path = require("path");

const cors = require("cors");

const express = require("express");

const router = require("./routers");

const fileUpload = require("express-fileupload");

const app = express();

app.use(
  fileUpload({
    createParentPath: true,
  })
);

// On active le middleware pour parser le playload JSON - remplace body-parser
app.use(express.json());

// TODO : Levée de la restriction des Cors à configurer
app.use(cors());

app.use(express.urlencoded({ extended: true }));

// app.use("images", express.static(path.join(__dirname, "images")));

app.use(router);

module.exports = app;
