const { ipcMain }    = require('electron');
const { Exemplo } = require('../controllers/controller');

ipcMain.on('ChannelDeExemplo',Exemplo) 