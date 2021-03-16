const Sequelize = require('sequelize');

const SalvarNome = async (event, arg) => {
  
    const database = require('./../database/db');
    const Name  = require('./../database/models/names');
    
    try {
        await database.sync();
        const resultadoCreate = await Name.create({
            name: arg.nome.toUpperCase(),
        })
        event.reply('SalvarNome', `Seja Bem Vindo(a) ${arg.nome}!\nAbra o arquivo 'database.sqlite' e veja os nomes salvos!`)
    } 
    catch (error) { 
        console.log(`Ocorreu um erro na execução da função Exemplo -> ${error}`) 
    }
  
}

const BuscarNome = async (event,arg) =>{
    const database = require('./../database/db');
    const Name  = require('./../database/models/names');

    try{
        await database.sync();
        // const nomes = await Name.findAll({where:{name:{[Sequelize.Op.like]:`${arg.nome}%`}}}) //Buscar Nomes iniciados por arg.nome
        // const nomes = await Name.findAll({order:[['name','DESC']]}) //Buscar Nomes ordenados 
        const nomes = await Name.findAll({ offset:(arg.page - 1) * 5 ,limit:5,order:[['name','DESC']] }) //Buscar Nomes paginados  

        event.reply('BuscarNome',JSON.stringify(nomes))
    }
    catch (error) { 
        console.log(`Ocorreu um erro na execução da função BuscarNome -> ${error}`) 
    }
}


const AlteraNome = async (event,arg) => {
    const database = require('./../database/db');
    const Name  = require('./../database/models/names');

    try{
        await database.sync();
        const nome = await Name.findByPk(arg.id) 
        nome.name = arg.name
        await nome.save() 
        event.reply('AlteraNome',JSON.stringify(nome))
    }
    catch (error) { 
        console.log(`Ocorreu um erro na execução da função AlteraNome -> ${error}`) 
    }
}

const DeletaNome = async (event,arg) => {
    const database = require('./../database/db');
    const Name  = require('./../database/models/names');

    try{
        await database.sync();
        const nome = await Name.findByPk(arg.id) 
        nome.destroy()
        event.reply('DeletaNome',JSON.stringify(nome))
    }
    catch (error) { 
        console.log(`Ocorreu um erro na execução da função DeletaNome -> ${error}`) 
    }
}
module.exports = {SalvarNome,BuscarNome,AlteraNome,DeletaNome}