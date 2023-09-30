process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const app = require('./app.js');
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;