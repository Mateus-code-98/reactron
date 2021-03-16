const Sequelize = require('sequelize');
const database  = require('./../db');

const CityPerson = database.define('CitiesPersons',{
  cityId:Sequelize.INTEGER,
  personId:Sequelize.INTEGER
})

const City = database.define('cities', {
    name:Sequelize.STRING,
    state:Sequelize.STRING
  })

const Person = database.define('persons', {
    name: Sequelize.STRING,
    age: Sequelize.STRING,
    cityId:Sequelize.INTEGER
})

City.belongsToMany(Person,{through: CityPerson})
Person.belongsToMany(City,{through: CityPerson})

City.hasMany(CityPerson);
CityPerson.belongsTo(City);
Person.hasMany(CityPerson);
CityPerson.belongsTo(Person);

module.exports = { Person,City,CityPerson }