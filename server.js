global.__base = __dirname + '/';

var express = require('express'); // Web Framework
var app = express();
var bodyParser = require('body-parser')
var init = require('./config/init')(),
    config = require('./config/config'),
    chalk = require('chalk'),
    logger = require('./config/logger');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// Init the express application
var app = require('./config/express')();

process.on('uncaughtException', function (err) {
    console.log('Error:', err);
});

// Start the app by listening on <port>
app.get('server').listen(config.port, config.hostname);

// Expose app
exports = module.exports = app;

// Logging initialization
console.log('Randomizer application started on ' + config.hostname + ':' + config.port);