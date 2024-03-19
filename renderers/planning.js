/*
 * Affichage du planning de l'enfant selon son idEnfant
*/

//Affichage Prénom et Nom
window.AfficheNom = (idEnfant) => {
  const listeData = document.getElementById('nom&prenom');
  const enfantContrat = window.bridge.getEnfant(idEnfant);
  console.log("Enfant trouvé :", enfantContrat);

  if (enfantContrat) {
    const nomComplet = `${enfantContrat.Prenom} ${enfantContrat.Nom}`;
    listeData.textContent = nomComplet;
  } else {
    console.error("Aucun enfant trouvé avec l'ID spécifié.");
  }
};


//Archivage du profil enfant
window.ArchiveEnfant = async (idEnfant) => {
    try {
      window.bridge.updateEtatContrat(idEnfant, 2);
      console.log("Le contrat de l'enfant est archivé avec succès");
    } catch (error) {
        console.error("Une erreur est survenue lors de l\'archivage du contrat de l'enfant :", error);
    }
};

// Attacher l'événement de clic à la fonction ArchiveEnfant
document.getElementById('archiveEnfant').addEventListener('click', async (evt) => {
    evt.preventDefault();
    await ArchiveEnfant(idEnfant);
});