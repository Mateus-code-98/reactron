const   Sequelize = require('sequelize');
const { Person }  = require('../database/models/index');

const SalvarCity = async (event, arg) => {
  
    const   database  = require('./../database/db');
    const { City }    = require('../database/models/index');
    const { persons } = arg
    try {
        await database.sync();
        const resultado = await City.create({
            name:arg.name.toUpperCase(),
            state:arg.state.toUpperCase(),
        })
        if(persons && persons.length > 0)resultado.addPersons(persons)
        
        event.reply('SalvarCity', 'Salvo')
    } 
    catch (error) { 
        console.log(`Ocorreu um erro na execução da função SalvarCity -> ${error}`) 
    }
}

const BuscarCity = async (event, arg) => {
  
    const   database  = require('./../database/db');
    const { City }    = require('../database/models/index');
    
    try {
        await database.sync();
        const cidade = await City.findAll({ 
            include:Person
          });
        event.reply('BuscarCity', JSON.stringify(cidade))
    } 
    catch (error) { 
        console.log(`Ocorreu um erro na execução da função BuscarCity -> ${error}`) 
    }
}

const DeletaCity = async (event, arg) => {
  
    const   database = require('./../database/db');
    const { City }   = require('../database/models/index');
    
    try {
        await database.sync();
        const cidade = await City.findByPk(arg.id)
        cidade.destroy()
        event.reply('DeletaCity', JSON.stringify(cidade))
    } 
    catch (error) { 
        console.log(`Ocorreu um erro na execução da função DeletaCity -> ${error}`) 
    }
}
module.exports = { SalvarCity,BuscarCity,DeletaCity }