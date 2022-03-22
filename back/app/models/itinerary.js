const database = require('./database');
const { ApiError } = require('../helpers/errorHandler');

const itineraryMapper = {
  async findAll() {
    // Récupération de tous les itineraires, avec les images associées
    const result = await database.query(
      `SELECT
        "itinerary"."id" AS "itinerary_id",
        "itinerary"."title" AS "itinerary_title",
        "itinerary"."description" AS "itinerary_description",
        "itinerary"."hour" AS "itinerary_hour",
        "itinerary"."minute" AS "itineray_minute",
        "itinerary"."highway" AS "is_highway",
        "itinerary"."kilometer" AS "itinerary_kilometer",
        "itinerary"."curve" AS "itinerary_curve",
        "itinerary"."trace" AS "itinerary_trace",
        "user"."alias" AS "user_alias",
        json_agg(json_build_object('district_name', district.name, 'district_latitude', district.latitude, 'district_longitude', district.longitude, 'district_zoom', district.zoom))AS "districts",
        json_agg(json_build_object('pic_title', p.title, 'pic_link',p.link)) AS "pictures"
        FROM "itinerary"
        LEFT JOIN "picture" p ON "itinerary"."id" = "itinerary_id"
        JOIN "user" ON "itinerary"."user_id" = "user"."id"
        JOIN "district" ON "itinerary"."district_id" = "district"."id"
        GROUP BY "itinerary"."id", "user"."alias"`,
    );

    if (!result.rows) {
      throw new Error('No record available in table "itinerary"');
    }
    return result.rows;
  },

  async findByPk(id) {
    const itineraryId = Number(id);
    // Récupération d'un itinéraire via son id, avec l'alias de son créateur et les images associées
    const result = await database.query(
      `SELECT
      "itinerary"."id" AS "itinerary_id",
      "itinerary"."title" AS "itinerary_title",
      "itinerary"."description" AS "itinerary_description",
      "itinerary"."hour" AS "itinerary_hour",
      "itinerary"."minute" AS "itineray_minute",
      "itinerary"."highway" AS "is_highway",
      "itinerary"."kilometer" AS "itinerary_kilometer",
      "itinerary"."curve" AS "itinerary_curve",
      "itinerary"."trace" AS "itinerary_trace",
      "user"."alias" AS "user_alias",
      json_agg(json_build_object('district_name', district.name, 'district_latitude', district.latitude, 'district_longitude', district.longitude, 'district_zoom', district.zoom))AS "districts",
      json_agg(json_build_object('pic_title', p.title, 'pic_link',p.link)) AS "pictures"
      FROM "itinerary"
      LEFT JOIN "picture" p ON "itinerary"."id" = "itinerary_id"
      JOIN "user" ON "itinerary"."user_id" = "user"."id"
      JOIN "district" ON "itinerary"."district_id" = "district"."id"
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
      hour,
      minute,
      highway,
      kilometer,
      curve,
      trace,
    } = body;
    const userId = Number(body.id);
    const districtId = Number(body.district);
    console.log(body);

    // Ajout d'un itineraire à la BDD
    const result = await database.query(
      `INSERT INTO "itinerary"
        ("title", "description", "hour", "minute", "highway", "kilometer", "curve", "trace", "user_id", "district_id")
      VALUES
        ('${title}', '${description}', '${hour}', '${minute}', '${highway}', '${kilometer}', '${curve}', '${trace}', '${userId}', '${districtId}')
        RETURNING *;`,
    );

    if (result.rowCount === 0) {
      return null;
    }
    return result.rows[0];
  },

  async update(id, itinerary) {
    const result = await database.query(
      'SELECT * FROM itinerary WHERE id = $1',
      [id],
    );

    if (result.rowCount === 0) {
      throw new ApiError(400, 'This itinerary does not exist');
    }

    const oldItinerary = result.rows[0];
    const newItinerary = {
      ...oldItinerary,
      ...itinerary,
    };

    const {
      title,
      description,
      hour,
      minute,
      highway,
      kilometer,
      curve,
      trace,
    } = newItinerary;
    const userId = newItinerary.user_id;
    const districtId = newItinerary.district_id;

    // Mise à jour d'un itineraire dans la BDD

    const savedItinerary = await database.query(
      `UPDATE "itinerary"
        SET title = '${title}',
        "description" = '${description}',
        "hour" = '${hour}',
        "minute" = '${minute}',
        "highway" = '${highway}',
        "kilometer" = '${kilometer}',
        "curve" = '${curve}',
        "trace" = '${trace}',
        "user_id" = '${userId}',
        "district_id" = '${districtId}'
        WHERE "itinerary"."id" = ${id}
        RETURNING *;`,
    );

    return savedItinerary.rows[0];
  },

  async delete(id) {
    const itineraryId = Number(id);
    // Suppression d'un itineraire de la BDD
    const result = await database.query(
      `DELETE FROM "itinerary" WHERE "itinerary"."id" = '${itineraryId}'`,
    );

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },
};

/**
 * @typedef {object} Itinerary
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {number} hour
 * @property {number} minute
 * @property {number} highway
 * @property {number} kilometer
 * @property {string} curve
 * @property {number} trace
 * @property {number} user_id
 * @property {number} district_id
 */

module.exports = itineraryMapper;
