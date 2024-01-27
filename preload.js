/* The preload script runs before. It has access to web APIs
   as well as Electron's renderer process modules and some polyfilled Node.js functions.
   https://www.electronjs.org/docs/latest/tutorial/sandbox */

// j'ai ajouté le async mais enlever si ça bug
//test pour afficher les contrats
   window.addEventListener('DOMContentLoaded', async () => {
    let testcontrat = window.bridge.getContrats();
    let divContrats = document.getElementById("testcontrat");
    let contratNb = testcontrat.join("<br />");
    divContrats.innerHTML = contratNb;




    
    const replaceText = (selector, text) => {
        //Récupère des éléments html avec leur id
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type])
    }
})

const testManager = require("./models/testmanager");
const {contextBridge} = require("electron");
const getContrats = () => 
{
    return testManager.getContrats();
}

contextBridge.exposeInMainWorld("bridge", {
    getContrats : getContrats
})
