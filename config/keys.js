// keys.js - choose which credentials to use.
require('dotenv').config();
console.log(process.env.COOKIE_KEY);
if (process.env.NODE_ENV === 'production') {
  console.log('prod mode');
  // If we are in development mode
  module.exports = require('./prod');
} else {
  // If we are in development mode return development keys.
  module.exports = require('./dev');
}
