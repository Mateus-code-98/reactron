const { ipcMain }    = require('electron');
const { SalvarNome,BuscarNome,AlteraNome,DeletaNome } = require('../controllers/controller');
const { SalvarCity,BuscarCity,DeletaCity } = require('../controllers/citiesController');
const { SalvarPerson,BuscarPerson } = require('../controllers/personsController');

ipcMain.on('SalvarNome',SalvarNome) 

ipcMain.on('BuscarNome',BuscarNome)

ipcMain.on('AlteraNome',AlteraNome)

ipcMain.on('DeletaNome',DeletaNome)

ipcMain.on('SalvarCity',SalvarCity)

ipcMain.on('SalvarPerson',SalvarPerson)

ipcMain.on('BuscarPerson',BuscarPerson)

ipcMain.on('BuscarCity',BuscarCity)

ipcMain.on('DeletaCity',DeletaCity)



