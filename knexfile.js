const path = require('path');

module.exports = {

  test: {
    client: 'pg',
    connection: `postgresql://localhost/${process.env.TEST_DATABASE_URL}`
  },

  development: {
    client: 'pg',
    connection: `postgresql://localhost/${process.env.DEV_DATABASE_URL}`
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};
