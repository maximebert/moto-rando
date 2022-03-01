const database = require('./database');

const itineraryMapper = {
  async findAll() {
    const result = await database.query(
      `SELECT
        "itinerary"."id" AS "itinerary_id",
        "itinerary"."title" AS "itinerary_title",
        "itinerary"."description" AS "itinerary_description",
        "picture"."title" AS "picture_title",
        "picture"."link" AS "picture_link"
        FROM "itinerary"
        JOIN "picture" ON "itinerary"."id" = "itinerary_id"`,
    );

    if (!result.rows) {
      throw new Error('No record available in table "itinerary"');
    }
    return result.rows;
  },
  async findByPk(id) {
    const itineraryId = Number(id);
    const result = await database.query(
      `SELECT
        "itinerary"."id" AS "itinerary_id",
        "itinerary"."title" AS "itinerary_title",
        "itinerary"."description" AS "itinerary_description",
        "itinerary"."duration" AS "itinerary_duration",
        "itinerary"."highway" AS "is_highway",
        "itinerary"."kilometer" AS "itinerary_kilometer",
        "itinerary"."curve" AS "itinerary_curve",
        "user"."alias" AS "user_alias",
        "picture"."title" AS "picture_title",
        "picture"."link" AS "picture_link"
        FROM "user"
        JOIN "picture" ON "user_id" = "user"."id"
        JOIN "itinerary" ON "itinerary_id" = "itinerary"."id"
        WHERE "itinerary"."id" = ${itineraryId}`,
    ); // modifier la requete pour grouper les images d'un meme itinéraire

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

    const result = await database.query(
      `INSERT INTO "itinerary"
        ("title", "description", "duration", "highway", "kilometer", "curve", "user_id")
        VALUES
        ('${title}', '${description}', '${duration}', '${highway}', '${kilometer}', '${curve}', '${userId}')
        RETURNING *;`,
    );
    if (result.rowCount === 0) {
      return null;
    }
    return result.rows[0];
  },

  async update(id, body) {
    const itineraryId = Number(id);
    const {
      title,
      description,
      duration,
      highway,
      kilometer,
      curve,
    } = body;
    const userId = body.user_id;

    const result = await database.query(
      `UPDATE "itinerary"
        SET "title" = '${title}',
        "description" = '${description}',
        "duration" = '${duration}',
        "highway" = '${highway}',
        "kilometer" = '${kilometer}',
        "curve" = '${curve}',
        "user_id" = '${userId}'
        WHERE "itinerary"."id" = ${itineraryId}
        RETURNING *;`,
    );
    if (result.rowCount === 0) {
      return null;
    }
    return result.rows[0];
  },

  async delete(id) {
    const itineraryId = Number(id);
    const result = await database.query(
      `DELETE FROM "itinerary" WHERE "itinerary"."id" = '${itineraryId}'`,
    );

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },
};

module.exports = itineraryMapper;
