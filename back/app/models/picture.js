const database = require('./database');

const pictureMapper = {

    async findAll() {
        const result = await database.query('SELECT * FROM "picture"');

        if (!result.rows) {
            throw new Error('No record available in table "picture"');
        }
        return result.rows;
    }
};

module.exports = pictureMapper;
