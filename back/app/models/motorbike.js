const database = require('./database');

const motorbikeMapper = {
  async findAll() {
    const result = await database.query(
      'SELECT * FROM "motorbike"',
    );

    if (!result.rows) {
      throw new Error('No record available in table "motorbike"');
    }
    return result.rows;
  },
  async findByPk(id) {
    const motorbikeId = Number(id);
    const result = await database.query(
      `SELECT
        "motorbike"."id" AS "motorbike_id",
        "motorbike"."brand" AS "motorbike_brand",
        "motorbike"."model" AS "motorbike_model",
        "user"."id" AS "user_id",
        "user"."alias" AS "user_alias"
        FROM "motorbike"
        JOIN "user" ON "user_id" = "user"."id"
        WHERE "motorbike"."id" = ${motorbikeId}`,
    );

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },

  async create(body) {
    const {
      brand,
      model,
      description,
    } = body;
    const userId = body.user_id;

    const result = await database.query(
      `INSERT INTO "motorbike"
        ("brand", "model", "description", "user_id")
        VALUES
        ('${brand}', '${model}', '${description}', '${userId}')
        RETURNING *;`,
    );
    if (result.rowCount === 0) {
      return null;
    }
    return result.rows[0];
  },

  async update(id, body) {
    const motorbikeId = Number(id);
    const {
      brand,
      model,
      description,
    } = body;
    const userId = body.user_id;

    const result = await database.query(
      `UPDATE "motorbike"
        SET "brand "= '${brand}',
        "model" = '${model}',
        "description" = '${description}',
        "user_id" = '${userId}'
        WHERE "motorbike"."id" = ${motorbikeId}
        RETURNING *;`,
    );
    if (result.rowCount === 0) {
      return null;
    }
    return result.rows[0];
  },

  async delete(id) {
    const motorbikeId = Number(id);
    const result = await database.query(
      `DELETE FROM "motorbike" WHERE "motorbike""id" = '${motorbikeId}'`,
    );

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },
};

module.exports = motorbikeMapper;
