const database = require('./database');

const motorbikeMapper = {
  // Route non utilisée, mais prête pour d'éventuelles nouvelles fonctionnalités
  async findAll() {
    const result = await database.query(
      'SELECT * FROM "district"',
    );

    if (!result.rows) {
      throw new Error('No record available in table "motorbike"');
    }
    return result.rows;
  },

  async findByPk(id) {
    const districtId = Number(id);
    // Récupération d'une moto, avec son propriétaire et la photo associée
    const result = await database.query(
      `SELECT * from "district"
        WHERE "id" = ${districtId}`,
    );

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },

};

/**
 * @typedef {object} District
 * @property {number} id
 * @property {number} user_id
 * @property {number} motorbike_id
 * @property {number} picture_id
 */

module.exports = motorbikeMapper;
