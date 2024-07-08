require('dotenv').config();

module.exports = {
  database: {
    connectionString: process.env.DATABASE_URL,
  },
};
