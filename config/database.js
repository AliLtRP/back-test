const { Sequelize } = require('sequelize');
const config = require('./config'); // Ensure correct path

console.log('DATABASE_URL:', config.database.connectionString);

const sequelize = new Sequelize(config.database.connectionString, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});

module.exports = sequelize;