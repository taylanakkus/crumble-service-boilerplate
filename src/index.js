const app = require('./config/express');

require('dotenv').config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on: ${port}`);
});
