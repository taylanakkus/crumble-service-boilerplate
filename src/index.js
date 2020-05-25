const app = require('./config/express');
const logger = require('./config/logger');
const {port} = require('./config/vars');
const mongoose = require('./config/mongoose');

// open mongoose connection
mongoose.connect();

app.listen(port, () => {
  logger.info(`server started on port ${port}`);
});
