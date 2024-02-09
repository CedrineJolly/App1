//test pour afficher les contrats
/*window.addEventListener('DOMContentLoaded', async () => {
    let testcontrat = window.bridge.getContrats();
    let divContrats = document.getElementById("testcontrat");
    //essaie de faire apparaître les infos du contrat
    let contratNb = testcontrat.map((elem) => {
        //retourne le type de contrat de tous les contrats de la BDD
        return elem.Type;
     }).join("<br/>");
    divContrats.innerHTML = contratNb; 
})*/


/**
 * Affiche la liste des contrats en base dans l'element html "contratsList"
 */
const displayListContrats = () => {
  // On récupère 
  const contratsListEl = document.getElementById('contratsList')
  const contrats = window.bridge.getContrats();
  console.log(contrats)
  // create html string
  const contratsItems = contrats.reduce((html, contrat) => {
    html += `<li class="contrat-item">Id_Contrat: ${contrat.IdContrat}, Type: ${contrat.Type}, Lundi: ${contrat.TpsLun}, Mardi: ${contrat.TpsMar},</li>`
  
    return html
  }, '')
  
  // set list html to the contrats items
  contratsListEl.innerHTML = contratsItems
}

displayListContrats()