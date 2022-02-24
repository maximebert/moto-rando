const database = require('./database');

const motorbikeMapper = {

    async findAll() {
        const result = await database.query('SELECT * FROM "motorbike"');

        if (!result.rows) {
            throw new Error('No record available in table "motorbike"');
        }
        return result.rows;
    }
};

module.exports = motorbikeMapper;
