const { Pool } = require('pg');

const config = { connectionString: process.env.DATABASE_URL };

if (process.env.NODE_ENV === 'production') {
  config.ssl = { rejectUnauthorized: false };
}

module.exports = new Pool();
