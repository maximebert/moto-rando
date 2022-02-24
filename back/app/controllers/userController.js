const userMapper = require('../models/user');

const userController = {

    async main(_, res) {
       res.send('hello')
    },
};

module.exports = userController;
