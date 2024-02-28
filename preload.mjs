import { contextBridge } from 'electron';
import { getContrats, createContrat, getTheContrat, deleteContrat } from './models/contratsmanager.js';
import { createEnfant, getEnfant } from './models/enfantmanager.js';

/* The preload script runs before. It has access to web APIs
   as well as Electron's renderer process modules and some polyfilled Node.js functions.
   https://www.electronjs.org/docs/latest/tutorial/sandbox */

/*window.addEventListener('DOMContentLoaded', () => {

    const replaceText = (selector, text) => {
        //Récupère des éléments html avec leur id
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type])
    }
})*/

contextBridge.exposeInMainWorld("bridge", {
    getContrats: getContrats,
    getTheContrat: getTheContrat,
    createContrat: createContrat,
    createEnfant: createEnfant,
    deleteContrat: deleteContrat,
    getEnfant: getEnfant
})
