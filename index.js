/*
  FileName: index.js
  Author: Minh Nguyen
  ID:301317346
  Date:9-30-2023
*/
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const app = require('./app.js');
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;