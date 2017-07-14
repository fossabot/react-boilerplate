"use strict";

/**
 * Module dependencies.
 */
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const logger = require('morgan');
const errorHandler = require('errorhandler');
const dotenv = require('dotenv');
const path = require('path');
const expressValidator = require('express-validator');
const expressStatusMonitor = require('express-status-monitor');

/**
 * Setting path to client files.
 */
const client = path.join(__dirname, "../client");

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 * Use the values like this `process.env.SOME_URI`.
 */
dotenv.load({ path: '../.env.example' });

/**
 * Create Express server.
 */
const app = express();

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 8080);
app.use(compression({ threshold: 0 }));
app.use('/', express.static(client));
app.use(expressStatusMonitor());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

/**
 * Primary app routes.
 */
app.get('*', (req, res) => {
  res.sendFile(`${client} + /index.html`);
});

/**
 * Error Handler.
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', '✓', app.get('port'), app.get('env')); 
  console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
