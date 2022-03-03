const database = require('./database');

const pictureMapper = {
  async findAll() {
    // Route non utilisée
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
