/*
 * Suppression d'un contrat enregistré en bdd
 */

document.addEventListener("DOMContentLoaded", function() {
  
  const deleteButton = document.getElementById('deleteContrat');
  deleteButton.addEventListener('click', function() {
      // Si l'id de contrat est disponible, cliquer sur le bouton suppression supprime le contrat
      // Récupérer l'id du contrat en cours
      const idContrat = document.getElementById('idContrat').value;
      if (idContrat) {
        deleteContrat(idContrat);
      }
  });
});

function deleteContrat(idContrat) {
  const deleteStatus = window.bridge.deleteContrat(idContrat);

  if (deleteStatus) {
    console.log(`Le contrat ${idContrat} a été supprimé avec succès.`);
    // Rafraîchit la page
    location.reload();
  } else {
    console.log(`Une erreur est survenue lors de la suppression du contrat ${idContrat}.`);
  }
}