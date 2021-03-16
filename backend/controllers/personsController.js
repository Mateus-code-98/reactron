const   Sequelize = require('sequelize');
const { City }     = require('../database/models/index');

const SalvarPerson = async (event, arg) => {
  
    const   database = require('./../database/db');
    const { Person } = require('../database/models/index');
    
    try {
        await database.sync();
        await Person.create({
            name:arg.name.toUpperCase(),
            age:arg.age,
            // cityId:arg.cityId
        })
        event.reply('SalvarPerson', 'Salvo')
    } 
    catch (error) { 
        console.log(`Ocorreu um erro na execução da função SalvarPerson -> ${error}`) 
    }
}

const BuscarPerson = async (event, arg) => {
  
    const   database = require('./../database/db');
    const { Person } = require('../database/models/index');
    
    try {
        await database.sync();
        const pessoa = await Person.findByPk(arg.id,{include:[{model:City,as:'cities'}]})
        event.reply('BuscarPerson', JSON.stringify(pessoa))
    } 
    catch (error) { 
        console.log(`Ocorreu um erro na execução da função SalvarPerson -> ${error}`) 
    }
}

module.exports = { SalvarPerson,BuscarPerson }