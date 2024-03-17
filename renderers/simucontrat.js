/*
 * Affiche la simulation d'un contrat selon les données entrées dans le form
 */

export const SimuContrats = (idContrat) => {
  console.log(`generation de la page de simulation pour le contrat ${idContrat}`)
  // On récupère 
  const listeData = document.getElementById('contratSimu')
  const contrat = window.bridge.getTheContrat(idContrat);
  console.log(contrat)
  // Création html string
  let html = ""
  //Récupération des données remplies dans le formulaire
  const TpsTot =  parseFloat(contrat.TpsLun) +  parseFloat(contrat.TpsMar) +  parseFloat(contrat.TpsMer) +  parseFloat(contrat.TpsJeu) +  parseFloat(contrat.TpsVen);
  let Salaire = 0;
  const TarifHoraire = parseFloat(contrat.TarifHoraire);
  const NbSemaines = parseFloat(contrat.NbSemaines);
  let MontantAide = parseFloat(contrat.AideCaf);
  let SalaireCAF = 0;
  let CongesPayes = 0;

  html += `<h6 class="contrat-text"> Temps total par semaines : ${TpsTot} heures </h6>`
  //Affichage du salaire selon le type de contrat
  if(contrat.Type == 'AC'){
    Salaire = ((TpsTot * TarifHoraire * 52)/12).toFixed(2);
    html += `<h6 class="contrat-text"> Salaire fixe net à payer par mois : ${Salaire} € </h6>`
  }
  else if (contrat.Type == 'AI'){
    Salaire = ((TpsTot * TarifHoraire * NbSemaines)/12).toFixed(2);
    html += `<h6 class="contrat-text"> Salaire fixe net à payer par mois : ${Salaire} € </h6>`
    CongesPayes = (Salaire * 12 /50).toFixed(2); 
    html += `<h6 class="contrat-text"> Montant des congés payés annuels ramenés à la semaine : ${CongesPayes} € </h6>`
  }
  else{
    //Salaire ramené à 47 semaines (52 - 5 semaines de congés payés) 
    Salaire = ((((TpsTot * NbSemaines)/47)*TarifHoraire*52)/12).toFixed(2);
    html += `<h6 class="contrat-text"> Salaire fixe net à payer par mois : ${Salaire} € </h6>`
  }

  //Calcul des aides et déduction du salaire net
  html += `<p></p> <h6 class="contrat-text"; style="color: #2c3e50";> Aide CAF </h6>`
  html += `<p></p> <h6 class="contrat-text"> Vous avez le droit à ${MontantAide} € d'aide de la CAF </h6>`
  SalaireCAF = (Salaire - MontantAide).toFixed(2);
  html += `<h6 class="contrat-text"> Salaire restant à payer après déduction : ${SalaireCAF} € </h6>`
  html += `<input type="hidden" id="idContrat" value="${idContrat}" />`
  
  console.log(html)

  listeData.innerHTML = html
}