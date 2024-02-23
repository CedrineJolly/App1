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
    let MontantAide = 0;
    let SalaireCAF = 0;

    html += `<h6 class="contrat-text"> Temps total par semaines : ${TpsTot} heures </h6>`
    //Affichage du salaire selon le type de contrat
    if(contrat.Type == 'AC'){
      Salaire = ((TpsTot * TarifHoraire * 52)/12).toFixed(2);
      html += `<h6 class="contrat-text"> Salaire fixe net à payer par mois : ${Salaire} € </h6>`
    }
    else if (contrat.Type == 'AI'){
      Salaire = ((TpsTot * TarifHoraire * NbSemaines)/12).toFixed(2);
      html += `<h6 class="contrat-text"> Salaire fixe net à payer par mois : ${Salaire} € </h6>`
    }
    else{
      Salaire = 0 ; //à compléter
      html += `<h6 class="contrat-text"> Salaire fixe net à payer par mois : ${Salaire} € </h6>`
    }

    //Calcul des aides et déduction du salaire net
    html += `<p></p> <h6 class="contrat-text"; style="color: #2c3e50";> Aide CAF </h6>`
    html += `<p></p> <h6 class="contrat-text"> Vous avez le droit à ${MontantAide} € d'aide de la CAF </h6>`
    SalaireCAF = Salaire - MontantAide;
    html += `<h6 class="contrat-text"> Salaire restant à payer après déduction : ${SalaireCAF} € </h6>`

    return html
}
  , '')
  
  listeData.innerHTML = contratsItems
}

displaySimuContrats()