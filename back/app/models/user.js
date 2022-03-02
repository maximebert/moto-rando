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
      `SELECT
        u.id AS "user_id",
        u.alias AS "user_alias",
        u.email AS "user_email",
        u.presentation AS "user_presentation",
        i.title AS "itinerary_title",
        m.id AS "motorbike_id",
        m.brand AS "motorbike_brand",
        m.model AS "motorbike_model",
        p1.title AS "motopic_title",
        p1.link AS "motopic_link",

        array_agg(DISTINCT p.title) AS "itipic_title",
        array_agg(DISTINCT p.link) AS "itipic_link"

        FROM "user" u
        LEFT JOIN "itinerary" i ON i.user_id = u.id
        LEFT JOIN "picture" p ON p.itinerary_id = i.id
        LEFT JOIN "motorbike" m ON u.id = m.user_id
        LEFT JOIN "picture" p1 ON p1.motorbike_id = m.id

        WHERE u.id = ${userId}
        GROUP BY u.id, i.title, m.id, m.brand, m.model, p1.title, p1.link`,
    );

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows;
  },
  async findByMail(email) {
    const result = await database.query(`SELECT * FROM "user" WHERE email = '${email}'`);

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },

  async create(alias, email, hashedPassword, presentation) {
    const result = await database.query(
      `INSERT INTO "user"
         ("alias", "email", "password", "presentation")
     VALUES
         ('${alias}', '${email}', '${hashedPassword}', '${presentation}')
         RETURNING *;`,
    );

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

    const result = await database.query(
      `UPDATE "user"
        SET "alias" = '${alias}',
        "email" = '${email}',
        "password" = '${password}',
        "presentation" = '${presentation}'
        WHERE "user"."id" = ${userId}
        RETURNING *;`,
    );
    if (result.rowCount === 0) {
      return null;
    }
    return result.rows[0];
  },
  async delete(id) {
    const userId = Number(id);
    const result = await database.query(
      `DELETE FROM "user" WHERE "user"."id" = '${userId}'`,
    );

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },
};

module.exports = userMapper;
