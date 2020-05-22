const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

const {logs} = require('../config/vars');

// apply middlewares
app.use(morgan(logs));

app.use(cors());
app.use(express.json());

const router = require('../api/routes');

app.use('/example', router);

// export
module.exports = app;
