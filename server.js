const config = require('./config/config');
const express = require('./config/express');
const mongoose = require('./config/mongoose');
const users = require('./routes/user.routes');

const app = express();
const db = mongoose();

app.use('/users', users);

app.listen(config.PORT, () => {
    console.log("Server Started on http://" + config.HOST + ":" + config.PORT);
});