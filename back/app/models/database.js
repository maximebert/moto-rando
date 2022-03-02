const { Pool } = require('pg');

if (process.env.NODE_ENV === 'production') {
  config.connectionString = process.env.DATABASE_URL;
  // ici, on désactive l'obligation pour notre app node de se
  // connecter à la BDD en ssl (mode sécurisé)
  config.ssl = {
      rejectUnauthorized: false,
  };
};
module.exports = new Pool();
