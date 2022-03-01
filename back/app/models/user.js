const database = require('./database');

const userMapper = {

  async connect(alias, hashedPassword) {
    // select * from "user" WHERE "alias" = 'maurice' AND "password" = 'popeye';
    const result = await database.query(`SELECT * from "user" WHERE "alias" = '${alias}' AND "password" = '${hashedPassword}'`);
    if (result.rowCount === 0) {
      return null;
    }
    return result.rows[0];
  },

  async findAll() {
    const result = await database.query('SELECT * FROM "user"');

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
  async findByAlias(alias) {
    const result = await database.query(`SELECT * FROM "user" WHERE alias = '${alias}'`);

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },

  async create(alias, email, hashedPassword, presentation) {
    const result = await database.query(`INSERT INTO "user"
         ("alias", "email", "password", "presentation")
     VALUES
         ('${alias}', '${email}', '${hashedPassword}', '${presentation}') RETURNING *;`);
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
