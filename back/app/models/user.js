const database = require('./database');

const userMapper = {

  async findAll() {
    const result = await database.query('SELECT * FROM "user"');

    if (!result.rows) {
      throw new Error('No record available in table "user"');
    }
    return result.rows;
  },
};

module.exports = userMapper;
