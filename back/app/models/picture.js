const database = require('./database');

const pictureMapper = {
  async findAll() {
    // Route non utilisée, mais prête pour d'éventuelles nouvelles fonctionnalités
    const result = await database.query(
      'SELECT * FROM "picture"',
    );

    if (!result.rows) {
      throw new Error('No record available in table "picture"');
    }
    return result.rows;
  },

  async findByPk(id) {
    const pictureId = Number(id);
    // Récupération d'une image
    const result = await database.query(
      `SELECT
        "picture"."title" AS "picture_title",
        "picture"."link" AS "picture_link"
        FROM "picture"
        WHERE "picture"."id" = ${pictureId}`,
    );

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },

  async createItiPic(body) {
    console.log('body picture', body);
    const {
      title,
      description,
      link,
    } = body;
    const userId = Number(body.user_id);
    const itineraryId = body.itinerary_id;
    console.log(title, description, link, userId, itineraryId);
    // Insertion d'une image dans la BDD
    const result = await database.query(
      `INSERT INTO "picture"
        ("title", "description", "link", "user_id", "itinerary_id")
        VALUES
        ('${title}', '${description}', '${link}', '${userId}', '${itineraryId}')
        RETURNING *;`,
    );
    if (result.rowCount === 0) {
      return null;
    }
    return result.rows[0];
  },

  async createMotoPic(body) {
    console.log('body picture', body);
    const {
      title,
      description,
      link,
    } = body;
    const userId = Number(body.user_id);
    const motorbikeId = body.motorbike_id;
    console.log(title, description, link, userId, motorbikeId);
    // Insertion d'une image dans la BDD
    const result = await database.query(
      `INSERT INTO "picture"
        ("title", "description", "link", "user_id", "motorbike_id")
        VALUES
        ('${title}', '${description}', '${link}', '${userId}', '${motorbikeId}')
        RETURNING *;`,
    );
    if (result.rowCount === 0) {
      return null;
    }
    return result.rows[0];
  },

  async update(id, picture) {
    const result = await database.query('SELECT * FROM "picture" WHERE id = $1', [id]);

    if (result.rowCount === 0) {
      throw result.status(400);
    }

    const oldPicture = result.rows[0];
    const newPicture = {
      ...oldPicture,
      ...picture,
    };
    const {
      title,
      link,
      description,
    } = newPicture;
    const userId = newPicture.user_id;
    const motorbikeId = newPicture.motorbike_id;
    const itineraryId = newPicture.itinary_id;

    // Mise à jour d'une image de la BDD
    const savedPicture = await database.query(`UPDATE "picture"
           SET "title" = '${title}',
           "description" = '${description}',
           "link" = '${link}',
           "user_id" = '${userId}',
           "motorbike_id" = '${motorbikeId}',
           "itinerary_id" = '${itineraryId}'
           WHERE "picture"."id" = ${id}
           RETURNING *;`);

    return savedPicture.rows[0];
  },

  async delete(id) {
    const pictureId = Number(id);

    // Suppression d'une image de la BDD
    const result = await database.query(
      `DELETE FROM "picture" WHERE "picture"."id" = '${pictureId}'`,
    );

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },
};

/**
 * @typedef {object} Picture
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {string} link
 * @property {number} user_id
 * @property {number} motorbike_id
 * @property {number} itinerary_id
 */

module.exports = pictureMapper;
