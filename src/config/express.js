const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const {logs} = require('./vars');
const error = require('../api/middleware/error');

const app = express();

// apply middlewares
app.use(morgan(logs));
app.use(cors());
app.use(express.json());

const router = require('../api/routes');

app.use('/example', router);

// if error is not an instanceOf APIError, convert it.
app.use(error.converter);

// catch 404 and forward to error handler
app.use(error.notFound);

// error handler, send stacktrace only during development
app.use(error.handler);

// export
module.exports = app;
