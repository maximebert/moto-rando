const database = require('./database');

const pictureMapper = {
  async findAll() {
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

  async create(body) {
    const {
      title,
      description,
      link,
    } = body;
    const userId = body.user_id;
    const motorbikeId = body.motorbike_id;
    const itineraryId = body.itinerary_id;

    const result = await database.query(
      `INSERT INTO "picture"
        ("title", "description", "link", "user_id", "motorbike_id", "itinerary_id")
        VALUES
        ('${title}', '${description}', '${link}', '${userId}', '${motorbikeId}', '${itineraryId}')
        RETURNING *;`,
    );
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
    const itineraryId = body.itinary_id;

    const result = await database.query(
      `UPDATE "picture"
        SET "title" = '${title}',
        "description" = '${description}',
        "link" = '${link}',
        "user_id" = '${userId}',
        "motorbike_id" = '${motorbikeId}',
        "itinerary_id" = '${itineraryId}'
        WHERE "picture"."id" = ${pictureId}
        RETURNING *;`,
    );
    if (result.rowCount === 0) {
      return null;
    }
    return result.rows[0];
  },

  async delete(id) {
    const pictureId = Number(id);
    const result = await database.query(
      `DELETE FROM "picture" WHERE "picture"."id" = '${pictureId}'`,
    );

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },
};

module.exports = pictureMapper;
