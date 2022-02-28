const database = require('./database');

const itinaryMapper = {
  async findAll() {
    const result = await database.query('SELECT * FROM "itinary"');

    if (!result.rows) {
      throw new Error('No record available in table "user"');
    }
    return result.rows;
  },
  async findByPk(id) {
    const itinaryId = Number(id);
    const result = await database.query(`SELECT * FROM "itinary" WHERE id = ${itinaryId}`);

    if (result.rowCount === 0) {
      return undefined;
    }

    return result.rows[0];
  },

  async create(body) {
    const {
      title,
      description,
      duration,
      highway,
      kilometer,
      curve,
    } = body;
    const userId = body.user_id;

    const result = await database.query(`INSERT INTO "itinary"
            ("title", "description", "duration", "highway", "kilometer", "curve", "user_id")
        VALUES
            ('${title}', '${description}', '${duration}', '${highway}', '${kilometer}', '${curve}', '${userId}') RETURNING *;`);
    if (result.rowCount === 0) {
      return null;
    }
    return result.rows[0];
  },

  async update(id, body) {
    const itinaryId = Number(id);
    const {
      title,
      description,
      duration,
      highway,
      kilometer,
      curve,
    } = body;
    const userId = body.user_id;

    const result = await database.query(`UPDATE "itinary" SET title= '${title}', description= '${description}', duration= '${duration}' , highway= '${highway}' , kilometer= '${kilometer}', curve= '${curve}' , user_id= '${userId}'  WHERE id = ${itinaryId} RETURNING *;`);
    if (result.rowCount === 0) {
      return null;
    }
    return result.rows[0];
  },

  async delete(id) {
    const itinaryId = Number(id);
    const result = await database.query(`DELETE FROM "itinary" WHERE id = '${itinaryId}'`);

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },
};

module.exports = itinaryMapper;
