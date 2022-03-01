const database = require('./database');

const userMapper = {

  async findAll() {
    const result = await database.query(
      'SELECT * FROM "user"',
    );

    if (!result.rows) {
      throw new Error('No record available in table "user"');
    }
    return result.rows;
  },
  async findByPk(id) {
    const userId = Number(id);
    const result = await database.query(`SELECT * FROM "user" WHERE id = ${userId}`);

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },

  async create(body) {
    const {
      alias,
      email,
      password,
      presentation,
    } = body;

    const result = await database.query(`INSERT INTO "user"
        ("alias", "email", "password", "presentation")
    VALUES
        ('${alias}', '${email}', '${password}', '${presentation}') RETURNING *;`);
    if (result.rowCount === 0) {
      return null;
    }
    return result.rows[0];
  },

  async update(id, body) {
    const userId = Number(id);
    const {
      alias,
      email,
      password,
      presentation,
    } = body;

    const result = await database.query(`UPDATE "user" SET alias= '${alias}', email= '${email}', password= '${password}' , presentation= '${presentation}'  WHERE id = ${userId} RETURNING *;`);
    if (result.rowCount === 0) {
      return null;
    }
    return result.rows[0];
  },
  async delete(id) {
    const userId = Number(id);
    const result = await database.query(`DELETE FROM "user" WHERE id = '${userId}'`);

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },
};

module.exports = userMapper;
