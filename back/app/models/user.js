const database = require('./database');

const userMapper = {

    async findAll() {
        const result = await database.query('SELECT * FROM "users"');

        if (!result.rows) {
            throw new Error('No record available in table "itinarys"');
        }
        return result.rows;
    }
};

module.exports = userMapper;
