// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
// const Location = require('./location');

// const Sensor = sequelize.define('Sensor', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   sensor_type: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   last_reading_time: {
//     type: DataTypes.DATE
//   },
//   location_id: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: Location,
//       key: 'location_id'
//     }
//   }
// }, {
//   timestamps: false
// });

// Sensor.belongsTo(Location, { foreignKey: 'location_id' });

// module.exports = Sensor;
