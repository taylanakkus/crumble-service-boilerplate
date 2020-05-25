require('dotenv').config();

module.exports = {
  env: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  port: process.env.PORT || 3000,
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
  mongo: {
    uri:
      process.env.NODE_ENV === 'test'
        ? process.env.MONGO_URI_TESTS
        : process.env.MONGO_URI
  }
};
