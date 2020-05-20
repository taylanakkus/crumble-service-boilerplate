const express = require('express');
const cors = require('cors');

const app = express();

// apply middlewares
app.use(cors());
app.use(express.json());

const router = require('../routes');

app.use('/example', router);

// export
module.exports = app;
