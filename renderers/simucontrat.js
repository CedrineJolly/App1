/*
 * Affiche la simulation d'un contrat selon les données entrées dans le form
 */
const displaySimuContrats = () => {
  // On récupère 
  const listeData = document.getElementById('contratSimu')
  const contrats = window.bridge.getContrats();
  console.log(contrats)
  // create html string
  const contratsItems = contrats.reduce((html, contrat) => {
    const TpsTot = contrat.TpsLun + contrat.TpsMar + contrat.TpsLMer + contrat.TpsJeu + contrat.TpsVen;
    const Salaire = TpsTot * 4;
    html += `<li class="contrat-item"> Temps total par semaines : ${TpsTot} </li>`
    
    if(contrat.Type == 'AC'){
        html += `<li class="contrat-item"> Salaire : ${Salaire} </li>`
    }
    else if (contrat.Type == 'AI'){
        html += `<li class="contrat-item">  </li>`
    }
    else{
        html += `<li class="contrat-item">  </li>`
    }

    return html
  }, '')
  
  listeData.innerHTML = contratsItems
}

displaySimuContrats()