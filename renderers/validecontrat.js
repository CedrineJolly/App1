/*
 * Validation d'un contrat enfant et création d'un nouveau profil
 */

// Lorsque le bouton valider est activé : la commande se lance :
// Lorsque le bouton valider est activé : la commande se lance :
document.getElementById('submitEnfant').addEventListener('click', async (evt) => {
    evt.preventDefault();

    try {
        // On récupère les données de la bdd 
        const dernierEnfant = await window.bridge.getEnfant();
        console.log(dernierEnfant);

        // Création du contenu HTML
        const nouvellePageHTML = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="" />
                <meta name="author" content="" />
                <title>Nounou d'Enfer</title>
                <link rel="icon" type="image/x-icon" href="../assets/favicon.ico" />
                <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous"></script>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
                <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
                <link href="../css/styles.css" rel="stylesheet" />
            </head>
            <body id="page-top">
                <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                    <div class="container">
                        <a class="navbar-brand" href="../index.html">Nounou d'Enfer</a>
                        <div class="collapse navbar-collapse">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="enfant.html">Enfants</a></li>
                                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="contrat.html">Contrats</a></li>
                                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="impots.html">Impôts</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <header class="masthead bg-secondary text-white text-center">
                    <h2>${dernierEnfant[0].Prenom} ${dernierEnfant[0].Nom}</h2>
                    <div class="divider-custom divider-light">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                </header>
                <h6 class="contrat-text">  </h6>
                <footer>
                    <div class="copyright py-4 text-center text-white">
                        <div class="container"><small>Copyright &copy; ENSC - Projet Informatique Individuel </small></div>
                    </div>
                </footer>
            </body>
            </html>`;

        // Création d'un objet Blob
        const blob = new Blob([nouvellePageHTML], { type: 'text/html' });

        // Création d'un lien de téléchargement
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `idEnfant${dernierEnfant[0].IdEnfant}.html`;

        // Clique sur le lien pour démarrer le téléchargement
        link.click();

        console.log('La nouvelle page HTML a été créée et téléchargée !');
    }
    catch (error) {
        console.error(error);
    }
});
