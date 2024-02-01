//test pour afficher les contrats
window.addEventListener('DOMContentLoaded', async () => {
    let testcontrat = window.bridge.getContrats();
    let divContrats = document.getElementById("testcontrat");
    //essaie de faire apparaître les infos du contrat
    let contratNb = testcontrat.join("<br/>");
    divContrats.innerHTML = contratNb; 
})