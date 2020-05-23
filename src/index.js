const app = require('./config/express');
const logger = require('./config/logger');
const {port} = require('./config/vars');

app.listen(port, () => {
  logger.info(`server started on port ${port}`);
});
