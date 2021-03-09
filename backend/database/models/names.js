const Sequelize = require('sequelize');
const database  = require('./../db');

const Name = database.define('names', {
  name: Sequelize.STRING
})

module.exports = Name;
