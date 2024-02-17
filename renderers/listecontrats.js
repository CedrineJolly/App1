/*
 * Affiche la liste des contrats en base dans l'élément html "contratsList"
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