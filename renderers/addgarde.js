/*
 * Ajout d'un horaire de garde
 */

//Lorsque la case du tableau est remplie, enregistrement
document.getElementById('contratForm').addEventListener('submit', (evt) => {

})

  const date = document.getElementById('tarif').value;
  const nbHeures = document.getElementById('semaines').value;

  if(idEnfant > 0) {
    const idGarde = window.bridge.putGarde({
      date: date,
      nbHeures: nbHeures,
      idEnfant: idEnfant
    })}

  else {
    console.log('Erreur lors de la création du contrat.')
  }
