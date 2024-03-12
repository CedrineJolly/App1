/*
 * Validation d'un contrat enfant et création d'un nouveau profil
*/

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

                <script src="../renderers/addgarde.js" type="module"></script>
                <section>
                    <div>
                        <h4 class="page-section-heading text-center text-uppercase text-secondary mb-5 mt-5">Planning Février</h4>
                        <p>

                        </p>
                    </div>
                    <div class="row justify-content-center">
                    <div class="col-lg-8 col-xl-7">
                        <table class="table">
                            <tr class="row">
                                <td class="col"><div class="form-floating mb-2"><h6>Jour</h6></div></td>
                                <td class="col"><div class="form-floating mb-2"><h6>Heure Arrivée</h6></div></td>
                                <td class="col"><div class="form-floating mb-2"><h6>Heure Départ</h6></div></td>
                                <td class="col"><div class="form-floating mb-2"><h6>Temps</h6></div></td>
                            </tr>
                        </table>

                        <script src="../renderers/calculgarde.js" type="module"></script>

                        <table class="table">
                        <tr class="row">
                            <td class="col"><div class="form-floating mb-2"><h6>TOTAL</h6></div></td>
                            <td class="col"><div class="form-floating mb-2"></div></td>
                            <td class="col"><div class="form-floating mb-2"></div></td>
                            <td class="col total-cell"><div class="form-floating mb-2"></div></td>
                        </tr>
                        </table>

                    </div>
                    </div>
                </section>

                <div class="row justify-content-center">
                <div class="col-lg-8 col-xl-7">
                    <section>
                        <h4 class="page-section-heading text-center text-uppercase text-secondary mb-5 mt-4">TOTAL</h4>
                        <div id="infosCAF"></div>
                        <script src="../renderers/calculCAF.js" type="module"></script>
                    </section>
                </div>
                </div>

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


/*
//ESSAI de code pour enregistrer automatiquement

const { app, dialog, fs } = window;

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

        
        // Chemin où enregistrer le fichier
        const filePath = remote.app.getPath(__dirname, '../pages') + `/idEnfant${dernierEnfant[0].IdEnfant}.html`;

        // Écrire le contenu HTML dans le fichier
        fs.writeFileSync(filePath, nouvellePageHTML);

        console.log('La nouvelle page HTML a été créée !');
        dialog.showMessageBoxSync({ message: 'La nouvelle page HTML a été créée !', type: 'info' });
    }
    catch (error) {
        console.error(error);
        dialog.showErrorBox('Erreur', 'Une erreur est survenue lors de la création de la page HTML.');
    }
});*/