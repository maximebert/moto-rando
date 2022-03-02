const database = require('./database');

const itineraryMapper = {
  async findAll() {
    const result = await database.query('SELECT * FROM "itinerary"');

    if (!result.rows) {
      throw new Error('No record available in table "itinerary"');
    }
    return result.rows;
  },
  async findByPk(id) {
    const itineraryId = Number(id);
    const result = await database.query(`SELECT * FROM "itinerary" WHERE id = ${itineraryId}`);

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

    const result = await database.query(`INSERT INTO "itinerary"
            ("title", "description", "duration", "highway", "kilometer", "curve","trace", "user_id")
        VALUES
            ('${title}', '${description}', '${duration}', '${highway}', '${kilometer}', '${curve}', '${trace}', '${userId}') RETURNING *;`);
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
      trace,
    } = body;
    const userId = body.user_id;

    const result = await database.query(`UPDATE "itinerary" SET title= '${title}', description= '${description}', duration= '${duration}' , highway= '${highway}' , kilometer= '${kilometer}', curve= '${curve}' , trace= '${trace}', user_id= '${userId}'  WHERE id = ${itineraryId} RETURNING *;`);
    if (result.rowCount === 0) {
      return null;
    }
    return result.rows[0];
  },

  async delete(id) {
    const itineraryId = Number(id);
    const result = await database.query(`DELETE FROM "itinerary" WHERE id = '${itineraryId}'`);

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },
};

module.exports = itineraryMapper;
