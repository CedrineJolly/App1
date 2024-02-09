//ANCIEN RENDERER -- NE PAS DéCOMMENTER

/*test pour afficher les contrats
window.addEventListener('DOMContentLoaded', async () => {
    let testcontrat = window.bridge.getContrats();
    let divContrats = document.getElementById("testcontrat");
    //essaie de faire apparaître les infos du contrat
    let contratNb = testcontrat.map((elem) => {
        //retourne le type de contrat de tous les contrats de la BDD
        return elem.Type;
     }).join("<br/>");
    divContrats.innerHTML = contratNb; 
});*/