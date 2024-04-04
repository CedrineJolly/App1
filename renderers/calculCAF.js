/*
 * Calcule les infos souhaitées
*/

export function CalculCAF()
{
    const infos = document.getElementById('infosCAF');
            let infosHTML = '';

            // Récupération des paramètres d'URL
            const urlParams4 = new URLSearchParams(window.location.search);
            // Récupération de la valeur de l'idEnfant depuis les paramètres d'URL
            let idEnfant4 = urlParams4.get('idEnfant');

            //Somme du nombre de lignes dans la bdd selon l'idEnfant
            //A faire ensuite selon le mois
            let nbJAccueil =  window.bridge.SommeGardesByIdEnfant(idEnfant4);
            infosHTML += `<h6 class="contrat-text"> Nombre de jours d'accueil : ${nbJAccueil}</h6>`;

            //Calcul indemnité d'entretien
            let entretien = 0;
            if(nbJAccueil>8)
                entretien = (3.69*nbJAccueil).toFixed(2);
            else
                entretien = (2.65*nbJAccueil).toFixed(2);
            infosHTML += `<h6 class="contrat-text"> Indemnité d'entretien : ${entretien} €</h6>`;

            //Calcul indemnité de repas
            //Si l'enfant est arrivé avant 12h et reparti après 13h, alors il a mangé
            let repas = 0;
            infosHTML += `<h6 class="contrat-text"> Indemnité de repas : ${repas} €</h6>`;

            //Calcul heures normales
            //Utilisation du nb de semaines de garde et d'heures par semaine de garde depuis le contrat
            
            let heuresNormales = 0;
            infosHTML += `<h6 class="contrat-text"> Nombre d'heures normales : ${heuresNormales} €</h6>`;

            //Calcul jours d'activité
            let jActivite = 0;
            infosHTML += `<h6 class="contrat-text"> Nombre de jours d'activité : ${jActivite} €</h6>`;

            //Salaire net
            let salaireNet = 0;
            infosHTML += `<h6 class="contrat-text"> Salaire net : ${salaireNet} €</h6>`;

            //Montant net
            let montantNet = 0;
            infosHTML += `<h6 class="contrat-text"> Salaire net : ${montantNet} €</h6>`;

            infos.innerHTML = infosHTML;
}

CalculCAF()