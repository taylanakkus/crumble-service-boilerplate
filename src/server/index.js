const express = require('express');
const cors = require('cors');

const app = express();

// apply middlewares
app.use(cors());
app.use(express.json());

// routes
const controllers = require('../controller/example.controller');

app.use('/', controllers.example);

// export
module.exports = app;
