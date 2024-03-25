/*
 * Calcule les infos souhaitées
*/

export function CalculCAF()
{
    const infos = document.getElementById('infosCAF');
            let infosHTML = '';

            /*Si il existe une correspondance dans la bdd pour ce jour (date), 
            alors c'est un jour d'accueil */
            //A modifier après que tout fonctionne
            let nbJAccueil = 6;
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