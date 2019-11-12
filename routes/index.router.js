const indexController = require('../controllers/index.controller');
const express = require('express');
const indexRoute = express();

indexRoute.get('/', indexController.indexResponse);

module.exports = indexRoute;