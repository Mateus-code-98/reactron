const Exemplo = async (event, arg) => {
  
    const database = require('./../database/db');
    const Name  = require('./../database/models/names');
    
    try {
        await database.sync();
        const resultadoCreate = await Name.create({
            name: arg.nome,
        })
        event.reply('ChannelDeExemplo', `Seja Bem Vindo(a) ${arg.nome}!\nAbra o arquivo 'database.sqlite' e veja os nomes salvos!`)
    } 
    catch (error) { 
        console.log(`Ocorreu um erro na execução da função Exemplo -> ${error}`) 
    }
  
}

module.exports = {Exemplo}