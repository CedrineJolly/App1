/*
 * Création d'un contrat avec le formulaire
 */
import {SimuContrats} from './simucontrat.js'

document.addEventListener("DOMContentLoaded", function() {
  const tarifHoraire = document.getElementById('tarif').value;
  const nbSemaines = document.getElementById('semaines').value;
  const aideCaf = document.getElementById('caf').value;

  // Définition des valeurs par défaut si les champs sont vides
  if (tarifHoraire === '') {
      document.getElementById('tarif').value = '4'; // Valeur par défaut pour le tarif horaire
  }
  if (nbSemaines === '') {
      document.getElementById('semaines').value = '52'; // Valeur par défaut pour le nombre de semaines de garde
  }

  if (aideCaf === '') {
      document.getElementById('caf').value = '319.07'; // Valeur par défaut tranche 2 pour la CAF
  }
});

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
  const nbSemaines = document.getElementById('semaines').value;

  const heuresLundi = document.getElementById('lundi').value;
  const heuresMardi = document.getElementById('mardi').value;
  const heuresMercredi = document.getElementById('mercredi').value;
  const heuresJeudi = document.getElementById('jeudi').value;
  const heuresVendredi = document.getElementById('vendredi').value;

  const aideCaf = document.getElementById('caf').value;

  /*Etat du contrat : 
    0 : simulation créée mais contrat non validé
    1 : contrat validé en cours de garde
    2 : contrat terminé, archivé
  */
  const etat = 0;

  const idContrat = window.bridge.createContrat({
    type: type,
    tarifHoraire: tarifHoraire,
    nbSemaines: nbSemaines,
    heuresLundi: heuresLundi,
    heuresMardi: heuresMardi,
    heuresMercredi: heuresMercredi,
    heuresJeudi: heuresJeudi,
    heuresVendredi: heuresVendredi,
    aideCaf: aideCaf,
    etat: etat
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

  // Sauvegarde la position actuelle de la fenêtre
  //const scrollPosition = window.scrollY;

  // Appelle la fonction pour afficher la simulation
  SimuContrats(idContrat);

  // Rafraîchit la page
  //location.reload();

  // Rétablit la position de la fenêtre après le rechargement
  //window.scrollTo(0, scrollPosition);

})