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
    const result = await database.query(
      // Requete en attente d'aide pour afficher la photo de la moto
      `SELECT
      "user"."id" AS "user_id",
      "user"."alias" AS "user_alias",
      "user"."email" AS "user_email",
      "user"."presentation" AS "user_presentation",
      "itinerary"."title" AS "itinerary_title",
      json_agg(DISTINCT "motorbike"."id") AS "motorbike_id",
      json_agg(DISTINCT "motorbike"."brand") AS "motrobike_brand",
      json_agg(DISTINCT "motorbike"."model") AS "motrobike_model",

      json_agg(DISTINCT "picture"."title") AS "picture_title"

      FROM "user"
      LEFT JOIN "itinerary" ON "user_id" = "user"."id"
      LEFT JOIN "picture" ON "itinerary_id" = "itinerary"."id"
      LEFT JOIN "motorbike" ON "motorbike"."user_id" = "user"."id" OR "motorbike_id" = "motorbike"."id"

      GROUP BY "user"."id", "itinerary"."title"
      WHERE "user"."id" = ${userId}`,
    );

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
