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

/*Affichage Mois et Année Actuelle
window.AfficheDate = () => {

  const listeData = document.getElementById('LeMoisActuel');

  let ladate = new Date();
  let month = ladate.getMonth()+1;
  let year = ladate.getFullYear();
  console.log(`Mois : ${month}, Année : ${year}`);

  // Liste des mois de l'année
  const moisListe = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin","Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

  // Conversion du mois en lettre
  let moisEnLettres = moisListe[month - 1];

  const moisEtAnnee = `Planning ${moisEnLettres} ${year}`;
  listeData.textContent = moisEtAnnee;
};*/

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