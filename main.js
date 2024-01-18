// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('node:path')

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    // and load the index.html of the app.
    mainWindow.loadFile('index.html')

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        //si la fenêtre n'est pas ouverte mais que le logiciel tourne, créer une fenêtre
        if (BrowserWindow.getAllWindows().length === 0)
            createWindow()
    })
})

//si toutes les fenêtres sont fermés par l'utilisateur, alors on quitte l'app définitivement
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})
