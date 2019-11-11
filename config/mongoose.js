const config = require('./config');
const mongoose = require('mongoose');

module.exports = () => {
    mongoose.Promise = global.Promise;
    db = mongoose.connect(config.dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(function () {
        console.log('Connected to database successfully', config.dbUrl);
    }, function (err) {
        console.log('Database connection timeout error');
    });

    return db;
};