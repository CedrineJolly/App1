/*
 * Création d'un contrat avec le formulaire
 */

//Lorsque le bouton submit du formulaire est activé : la commande se lance
document.getElementById('contratForm').addEventListener('submit', (evt) => {
  // prevent default refresh functionality of forms
  evt.preventDefault()

  // Récupérer le nom et prénom de l'enfant
  const prenom = document.getElementById('prenom').value;
  const nom = document.getElementById('nom').value;

  // Récupérer la valeur du bouton radio sélectionné
  const typeContrat = document.getElementsByName('typecontrat');
  let type = null;
  for (let i = 0; i < typeContrat.length; i++) {
    if (typeContrat[i].checked) {
      switch (typeContrat[i].value) {
        case '1':
          type = 'AC';
          break;
        case '2':
          type = 'AI';
          break;
        case '3':
          type = 'PP';
          break;
        default:
          type = null;
      }
      break;
    }
  }
  const tarifHoraire = document.getElementById('tarif').value;
  const heuresLundi = document.getElementById('lundi').value;
  const heuresMardi = document.getElementById('mardi').value;
  const heuresMercredi = document.getElementById('mercredi').value;
  const heuresJeudi = document.getElementById('jeudi').value;
  const heuresVendredi = document.getElementById('vendredi').value;

  const idContrat = window.bridge.createContrat({
    type: type,
    tarifHoraire: tarifHoraire,
    heuresLundi: heuresLundi,
    heuresMardi: heuresMardi,
    heuresMercredi: heuresMercredi,
    heuresJeudi: heuresJeudi,
    heuresVendredi: heuresVendredi
  })
  if(idContrat > 0) {
    const idEnfant = window.bridge.createEnfant({
      prenom: prenom,
      nom: nom,
      idContrat: idContrat
    })} 
  else {
    console.log('Erreur lors de la création du contrat.')
  }
})