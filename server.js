const express = require('express');
const compression = require('compression');
const logger = require('morgan');
const path = require('path');

/**
 * Setting path to client files.
 */
const client = path.join(__dirname, './client');

/**
 * Create Express server.
 */
const app = express();

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 8080);
app.set('view cache', true);
app.use(compression({ threshold: 0 }));
app.use('/', express.static(client, { maxAge: 31557600 }));
if (app.get('env') !== 'production') {
  app.use(logger('dev'));
}

/**
 * Primary app routes.
 */
app.get('*', (req, res) => {
  res.sendFile(client + '/index.html');
});

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  /* eslint-disable no-console */
  console.log('%s App is running at http://localhost:%d in %s mode', '✓', app.get('port'), app.get('env')); 
  console.log('  Press CTRL-C to stop\n');
  /* eslint-enable no-console */
});

module.exports = app;
