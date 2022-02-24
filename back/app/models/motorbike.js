const database = require('./database');

const motorbikeMapper = {

    async findAll() {
        const result = await database.query('SELECT * FROM "motorbikes"');

        if (!result.rows) {
            throw new Error('No record available in table "motorbikes"');
        }
        return result.rows;
    }
};

module.exports = motorbikeMapper;
