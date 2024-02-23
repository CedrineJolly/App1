/*
 * Affiche la simulation d'un contrat selon les données entrées dans le form
 */
const displaySimuContrats = () => {
  // On récupère 
  const listeData = document.getElementById('contratSimu')
  const derniercontrat = window.bridge.getTheContrat();
  console.log(derniercontrat)
  // create html string
  const contratsItems = derniercontrat.reduce((html, contrat) => {
    //Récupération des données remplies dans le formulaire
    const TpsTot = contrat.TpsLun + contrat.TpsMar + contrat.TpsMer + contrat.TpsJeu + contrat.TpsVen;
    let Salaire = 0;
    const TarifHoraire = contrat.TarifHoraire;
    const NbSemaines = contrat.NbSemaines;

    html += `<li class="contrat-item"> Temps total par semaines : ${TpsTot} </li>`
    
    if(contrat.Type == 'AC'){
      Salaire = (TpsTot * TarifHoraire * 52)/12;
      html += `<li class="contrat-item"> Salaire fixe net à payer par mois: ${Salaire} </li>`
    }
    else if (contrat.Type == 'AI'){
      Salaire = (TpsTot * TarifHoraire * NbSemaines)/12;
      html += `<li class="contrat-item"> Salaire fixe net à payer par mois: ${Salaire}</li>`
    }
    else{
      html += `<li class="contrat-item">  </li>`
    }

    return html
    
    // Test de syntaxe avec un switch
    /* switch (contrat.Type) {
      case 'AC':
        Salaire = (TpsTot * TarifHoraire * 52) / 12;
        html += `<li class="contrat-item"> Salaire fixe net à payer par mois: ${Salaire} </li>`;
        break;
      case 'AI':
        Salaire = (TpsTot * TarifHoraire * NbSemaines) / 12;
        html += `<li class="contrat-item"> Salaire fixe net à payer par mois: ${Salaire}</li>`;
        break;
      default:
        html += `<li class="contrat-item">  </li>`; 
        } */
}
  , '')
  
  listeData.innerHTML = contratsItems
}

displaySimuContrats()