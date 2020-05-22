require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev'
};
