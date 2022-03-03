const database = require('./database');

const motorbikeMapper = {
  // Route non utilisée
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
        "user"."alias" AS "user_alias",
        json_agg(json_build_object('pic_title', p.title, 'pic_link', p.link)) AS "motopic"
        FROM "user"
        LEFT JOIN "motorbike" ON "user"."id" = "user_id"
        LEFT JOIN "picture" p ON "motorbike"."id" = "motorbike_id"
        WHERE "motorbike"."id" = ${motorbikeId}
        GROUP BY "motorbike"."id", "user"."id"`,
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
  async update(id, moto) {
    const result = await database.query('SELECT * FROM "motorbike" WHERE id = $1', [id]);

    if (result.rowCount === 0) {
      throw result.status(400);
    }

    const oldMoto = result.rows[0];
    const newMoto = {
      ...oldMoto,
      ...moto,
    };
    const {
      brand,
      model,
      description,
    } = newMoto;
    const userId = newMoto.user_id;

    const savedMotorbike = await database.query(`UPDATE "motorbike"
          SET "brand" = '${brand}',
        "model" = '${model}',
         "description" = '${description}',
         "user_id" = '${userId}'
         WHERE "motorbike"."id" = ${id}
          RETURNING *;`);

    return savedMotorbike.rows[0];
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
