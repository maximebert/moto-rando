const database = require('./database');

const itineraryMapper = {
  async findAll() {
    const result = await database.query(
      `SELECT
        "itinerary"."id" AS "itinerary_id",
        "itinerary"."title" AS "itinerary_title",
        "itinerary"."description" AS "itinerary_description",
        "itinerary"."trace" AS "itinerary_trace",
        json_agg(json_build_object('pic_title', p.title, 'pic_link',p.link)) AS "pictures"
        FROM "itinerary"
        LEFT JOIN "picture" p ON "itinerary"."id" = "itinerary_id"
        GROUP BY "itinerary"."id"`,
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
        json_agg(json_build_object('pic_title', p.title, 'pic_link',p.link)) AS "pictures"
        FROM "user"
        JOIN "picture" p ON "user_id" = "user"."id"
        JOIN "itinerary" ON "itinerary_id" = "itinerary"."id"
        WHERE "itinerary"."id" = ${itineraryId}
        GROUP BY "itinerary"."id", "user"."alias"`,
    );

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
      trace,
    } = body;
    const userId = body.user_id;

    const result = await database.query(
      `INSERT INTO "itinerary"
        ("title", "description", "duration", "highway", "kilometer", "curve","trace", "user_id")
      VALUES
        ('${title}', '${description}', '${duration}', '${highway}', '${kilometer}', '${curve}', '${trace}', '${userId}')
        RETURNING *;`,
    );

    if (result.rowCount === 0) {
      return null;
    }
    return result.rows[0];
  },

  async update(id, itinerary) {
    const result = await database.query('SELECT * FROM itinerary WHERE id = $1', [id]);

    if (result.rowCount === 0) {
      throw result.status(400);
    }

    const oldItinerary = result.rows[0];
    const newItinerary = {
      ...oldItinerary,
      ...itinerary,
    };
    const {
      title,
      description,
      highway,
      kilometer,
      curve,
      trace,
    } = newItinerary;
    const userId = newItinerary.user_id;
    const newDuration = newItinerary.duration;

    console.log(newDuration);

    const savedItinerary = await database.query(`UPDATE "itinerary"
           SET title = '${title}',
          description = '${description}',
           duration = '${newDuration}',
           highway = '${highway}',
          kilometer = '${kilometer}',
          curve = '${curve}',
          trace = '${trace}',
          user_id = '${userId}'
           WHERE "itinerary"."id" = ${id}
          RETURNING *;`);

    return savedItinerary.rows[0];
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
