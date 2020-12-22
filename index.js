const electron = require("electron")

const { app, BrowserWindow, ipcMain } = electron

app.on("ready", () => {
 const mainWindows = new BrowserWindow({
  webPreferences: {
   nodeIntegration: true,
  },
 })
 mainWindows.loadURL(`file://${__dirname}/index.html`)
})

ipcMain.on("video:submit", (event, path) => {
 console.log(path)
})
