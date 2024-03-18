/*
 * Ajout d'un temps de garde selon la date dans la bdd
 */

//Lorsque la case du tableau est remplie, enregistrement

// changer la réception par form
// à faire pour enregistrer en bdd
document.getElementById('contratForm').addEventListener('submit', (evt) => {

})

  const date = dateDuJour;
  const nbHeures = totalHeures;

  if(idEnfant > 0) {
    const idGarde = window.bridge.putGarde({
      date: date,
      nbHeures: nbHeures,
      idEnfant: idEnfant
    })}

  else {
    console.log('Erreur lors de la création du contrat.')
  }
