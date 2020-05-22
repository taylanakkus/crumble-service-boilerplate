const app = require('./config/express');
const logger = require('./config/logger');
require('dotenv').config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`server started on port ${port}`);
});
