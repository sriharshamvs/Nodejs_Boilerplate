const config = require('./config/config');
const express = require('./config/express');
const mongoose = require('./config/mongoose');
const users = require('./routes/user.routes');
const index = require('./routes/index.router');

const app = express();
const db = mongoose();

app.use('/users', users);
app.use('/', index);

app.listen(config.PORT, () => {
    console.log("Server Started on http://" + config.HOST + ":" + config.PORT);
});