const multer = require('multer');

const fs = require('fs');
const { promisify } = require('util');
const pipeline = promisify(require('stream').pipeline);

async (req, res, next) {
  const now = Date.now();
  const {
    file, // On récupère le fichier sélectionné en front
    body: { name } // on récupère les champs du formulaire
  } = req;

  if (file.detectedFileExtension !== '.jpg') {
    next(new Error('invalid file type')); // Si le fichier n'a pas l'exteniosn jpg, on renvoie une erreur
  }

  await pipeline(
    file.stream,
    fs.createWriteStream(`${__dirname}/../../../front/src/assets/images/${fileName}`)
  );

  const fileName = `${name}_${now}${file.detectedFileExtension}`;

  res.send(`File Uploaded as ${fileName}`);
  },

module.exports = multer().single('file'); // file = nom du fichier uploadé
