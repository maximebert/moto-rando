const database = require('./database');

const itinaryMapper = {

    async findAll() {
        const result = await database.query('SELECT * FROM "itinarys"');

        if (!result.rows) {
            throw new Error('No record available in table "itinarys"');
        }
        return result.rows;
    }
};

module.exports = itinaryMapper;
