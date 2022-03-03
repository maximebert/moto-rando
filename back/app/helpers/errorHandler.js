/**
 * On met en place un gestionnaire d'erreur, sous forme de middleware,
 * qui sera chargé de répondre à l'utilisateur
 * en cas de passage d'erreur à la function next()
 */
const ApiError = require('../errors/apiError');
// Lignes en commentaires car non nécessaires pour le moment
// const WebsiteError = require('../errors/websiteError');

const errorHandler = (err, res) => {
  let { statusCode, message } = err;

  if (Number.isNaN(Number(statusCode))) {
    statusCode = 500;
  }

  // Commentaire de ces lignes car on avait rencontré une erreur "header défini 2 fois",
  // car on renvoyait 2 fois res.json (en double avec les lignes 26 à 31) :

  // if (statusCode === 500) {
  //   res.json(err);
  // }

  if (statusCode === 500 && res.app.get('env') !== 'development') {
    message = 'Internal Server Error';
  }

  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
  });
};

module.exports = {
  errorHandler,
  ApiError,
  // Lignes en commentaires car non nécessaires pour le moment
  //   WebsiteError,
};
