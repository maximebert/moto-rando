const database = require('./database');

const itinaryMapper = {

    async findAll() {
        const result = await database.query('SELECT * FROM "itinary"');

        if (!result.rows) {
            throw new Error('No record available in table "itinary"');
        }
        return result.rows;
    }
};

module.exports = itinaryMapper;
