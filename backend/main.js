const { BrowserWindow, app } = require('electron');

const  path = require('path');

require('./routes/channels.js')

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js")
    }
  })
  win.loadURL("http://localhost:3000")
  // win.loadFile('build/index.html')
}

app.whenReady().then(createWindow)