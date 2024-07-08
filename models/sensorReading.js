// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
// const Sensor = require('./sensor');

// const ReadingSensor = sequelize.define('ReadingSensor', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   sensor_id: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: Sensor,
//       key: 'id'
//     }
//   },
//   timestamp: {
//     type: DataTypes.DATE,
//     defaultValue: DataTypes.NOW
//   },
//   temperature: {
//     type: DataTypes.FLOAT
//   },
//   humidity: {
//     type: DataTypes.FLOAT
//   },
//   concentration: {
//     type: DataTypes.FLOAT
//   },
//   co2: {
//     type: DataTypes.FLOAT
//   },
//   particle_level: {
//     type: DataTypes.FLOAT
//   },
//   air_quality_label: {
//     type: DataTypes.STRING
//   },
//   sensor_value: {
//     type: DataTypes.FLOAT
//   }
// }, {
//   timestamps: false
// });

// ReadingSensor.belongsTo(Sensor, { foreignKey: 'sensor_id' });

// module.exports = ReadingSensor;
