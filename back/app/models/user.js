const database = require('./database');

const userMapper = {

  async findAll() {
    // Route non utilisée, mais prête pour d'éventuelles nouvelles fonctionnalités
    const result = await database.query(
      'SELECT * FROM "user"',
    );

    if (!result.rows) {
      throw new Error('No record available in table "user"');
    }
    return result.rows;
  },
  /**
 *
 * @param {*} id
 * @returns {User}
 */
  async findByPk(id) {
    const userId = Number(id);
    // Récupération d'un utilisateur, avec sa moto, la photo de sa moto,
    // ses itineraires et leurs photos
    const result = await database.query(
      `SELECT
      u.id AS "user_id",
      u.alias AS "user_alias",
      u.email AS "user_email",
      u.presentation AS "user_presentation",
      u.created_at AS "created_at",
      i.title AS "itinerary_title",
      m.id AS "motorbike_id",
      m.brand AS "motorbike_brand",
      m.model AS "motorbike_model",
      p1.title AS "motopic_title",
      p1.link AS "motopic_link",

      json_agg(json_build_object('pic_title', p.title, 'pic_link', p.link)) AS "itipic"

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

  async findByAlias(alias) {
    // Récupération d'un utilisateur par son alias
    const result = await database.query(`SELECT * FROM "user" WHERE alias = '${alias}'`);

    if (result.rowCount === 0) {
      return undefined;
    }

    return result.rows[0];
  },

  async findByMail(email) {
    // Récupération d'un utilisateur par son email
    const result = await database.query(`SELECT * FROM "user" WHERE email = '${email}'`);

    if (result.rowCount === 0) {
      return undefined;
    }

    return result.rows[0];
  },

  async create(alias, email, hashedPassword, presentation) {
    // Insertion d'un utilisateur dans la BDD
    const result = await database.query(
      `INSERT INTO "user"
         ("alias", "email", "password", "presentation")
     VALUES
         ('${alias}', '${email}', '${hashedPassword}', '')
         RETURNING *;`,
    );

    if (result.rowCount === 0) {
      return null;
    }
    return result.rows[0];
  },

  async update(id, user) {
    const result = await database.query('SELECT * FROM "user" WHERE id = $1', [id]);

    if (result.rowCount === 0) {
      throw result.status(400);
    }

    const oldUser = result.rows[0];
    const newUser = {
      ...oldUser,
      ...user,
    };
    const {
      alias,
      email,
      password,
      presentation,
    } = newUser;

    // Mise à jour d'un utilisateur de la BDD
    const savedUser = await database.query(`UPDATE "user"
           SET "alias" = '${alias}',
          "email" = '${email}',
          "password" = '${password}',
          "presentation" = '${presentation}'
          WHERE id = '${id}'
          RETURNING *;`);

    return savedUser.rows[0];
  },

  async delete(id) {
    const userId = Number(id);
    // Suppression d'un utilisateur de la BDD
    const result = await database.query(
      `DELETE FROM "user" WHERE "user"."id" = '${userId}'`,
    );

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },

};
/**
 * @typedef {object} User
 * @property {number} id
 * @property {string} alias
 * @property {string} email
 * @property {string} presentation
 */

module.exports = userMapper;
