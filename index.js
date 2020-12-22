const electron = require("electron")
const ffmpeg = require("fluent-ffmpeg")

const { app, BrowserWindow, ipcMain } = electron

let mainWindows

app.on("ready", () => {
 mainWindows = new BrowserWindow({
  webPreferences: {
   nodeIntegration: true,
  },
 })
 mainWindows.loadURL(`file://${__dirname}/index.html`)
})

ipcMain.on("video:submit", (event, path) => {
 ffmpeg.ffprobe(path, (err, metadata) => {
  mainWindows.webContents.send("video:metadata", metadata.format.duration)
 })
})
