const database = require('./database');

const pictureMapper = {
  async findAll() {
    const result = await database.query('SELECT * FROM "picture"');

    if (!result.rows) {
      throw new Error('No record available in table "picture"');
    }
    return result.rows;
  },
  async findByPk(id) {
    const pictureId = Number(id);
    const result = await database.query(`SELECT * FROM "picture" WHERE id = ${pictureId}`);

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },

  async create(body) {
    const {
      title,
      description,
      link,
    } = body;
    const userId = body.user_id;
    const motorbikeId = body.motorbike_id;
    const itinaryId = body.itinary_id;

    const result = await database.query(`INSERT INTO "picture"
            ("title", "description", "link", "user_id", "motorbike_id", "itinary_id")
        VALUES
            ('${title}', '${description}', '${link}', '${userId}', '${motorbikeId}', '${itinaryId}') RETURNING *;`);
    if (result.rowCount === 0) {
      return null;
    }
    return result.rows[0];
  },

  async update(id, body) {
    const pictureId = Number(id);
    const {
      title,
      description,
      link,
    } = body;
    const userId = body.user_id;
    const motorbikeId = body.motorbike_id;
    const itinaryId = body.itinary_id;

    const result = await database.query(`UPDATE "picture" SET title= '${title}', description= '${description}', link= '${link}' , user_id= '${userId}', motorbike_id= '${motorbikeId}', itinary_id= '${itinaryId}'  WHERE id = ${pictureId} RETURNING *;`);
    if (result.rowCount === 0) {
      return null;
    }
    return result.rows[0];
  },

  async delete(id) {
    const pictureId = Number(id);
    const result = await database.query(`DELETE FROM "picture" WHERE id = '${pictureId}'`);

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },
};

module.exports = pictureMapper;
