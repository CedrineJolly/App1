// Modules to control application life and create native browser window
import { app, BrowserWindow } from 'electron';
import { join } from 'node:path';
//import { getContrats } from './models/contratsmanager.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration:  true, // Permet le chargement de modules dans le preload script
            //contextIsolation: false,
            preload: join(__dirname, './preload.mjs')
        }
    })

    // and load the index.html of the app.
    mainWindow.loadFile('index.html')

    // Ouvre les DevTools dans l'app. A commenter pour le masquer
    mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
    console.log("app ready - create window")
    createWindow()


    /*app.on('activate', function () {
        //si la fenêtre n'est pas ouverte mais que le logiciel tourne, créer une fenêtre
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })*/
})

//si toutes les fenêtres sont fermés par l'utilisateur, alors on quitte l'app définitivement
app.on('window-all-closed', function () {
    //if (process.platform !== 'darwin') 
    app.quit()
})
