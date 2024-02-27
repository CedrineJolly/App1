/*
 * Suppression d'un contrat enregistré en bdd
 */

document.addEventListener("DOMContentLoaded", function() {
  // Récupérer l'id du dernier contrat créé
  const idContrat = window.bridge.getTheContrat();

  // Si l'id de contrat est disponible, ajouter un click sur le bouton suppression supprime le contrat
  if (idContrat) {
    const deleteButton = document.getElementById('deleteContrat');
    deleteButton.addEventListener('click', function() {
      deleteContrat(idContrat);
    });
  }
});

function deleteContrat() {
  const deleteStatus = window.bridge.deleteContrat();

  if (deleteStatus) {
    console.log('Le contrat a été supprimé avec succès.');
  } 
  else {
    console.log('Une erreur est survenue lors de la suppression du contrat.');
  }
}