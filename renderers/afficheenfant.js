/*
 * Affiche le raccourci vers la page Enfant quand elle est créée
*/

export const AfficheEnfant = () => {
  // On récupère 
  const listeData = document.getElementById('profilEnfant')
  const profilenfant = window.bridge.getInfoEnfant();
  console.log(profilenfant)

  const enfantItems = profilenfant.reduce((html, enfant) => {
    
    /*Récupération des données du profil enfant
    const Id = enfant.IdEnfant;
    const Nom = enfant.Nom;
    const Prenom = enfant.Prenom;*/

    //Choix aléatoire d'une image dans le dossier
    const nbAleatoire = Math.floor(Math.random() * 8) + 1;
    
    const imgAleatoire = `./assets/img/portfolio/image${nbAleatoire}.png`;

    html += `<!-- Enfant Item ${enfant.IdEnfant}-->
                <div class="col-md-6 col-lg-4">
                    <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                        <a href="./pages/idEnfant${enfant.IdEnfant}.html"
                            class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="portfolio-item-caption-content text-center text-white"><i
                                    class="fa-plus">${enfant.Prenom}</i></div>
                            </a>
                        <img class="img-fluid" src="${imgAleatoire}" alt="..." />
                    </div>
                </div>`
    return html
}
  , '')
  
  listeData.innerHTML = enfantItems
}

AfficheEnfant()
