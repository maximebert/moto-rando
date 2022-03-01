const { Pool } = require('pg');

if (process.env.NODE_ENV === 'production') {
    config.connectionString = process.env.DATABASE_URL;
    // ici, on désactive l'obligation pour notre app node de se
    // connecter à la BDD en ssl (mode sécurisé)
    config.ssl = {
        rejectUnauthorized: false,
    };
}
module.exports = new Pool();


postgres://kaiarapwckjvkq:2e8ea9890a9912070481fefbae795d9bc7dfd3f32c42f7135a614f1b5cf02da3@ec2-54-195-76-73.eu-west-1.compute.amazonaws.com:5432/dfl1pa2hegc8ba
