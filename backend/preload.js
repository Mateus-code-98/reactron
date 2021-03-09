const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld(
    "appRuntime", {
        send: (channel, data) => {
            ipcRenderer.send(channel, data);
        },
        subscribe: (channel, listener) => {
            ipcRenderer.on(channel, listener);
        },
        removeAll:(channel) =>{
            ipcRenderer.removeAllListeners(channel);
        },
        removeListener:(channel, listener) =>{
            ipcRenderer.removeListener(channel,listener)
        }
    }
)