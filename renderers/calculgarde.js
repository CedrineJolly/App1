/*
 * Calcule le temps de garde par jour avec les données précédentes
*/

export function GestionTable()
{
    // Récupérer la référence du tableau
                const table = document.querySelector('.table');
                let dateDuJour = "";

                // Créer un tableau pour stocker les résultats
                //const results = [];

                // Créer 31 lignes au tableau
                for (let i = 1; i <= 31; i++) {
                    const row = document.createElement('tr'); // Créer une nouvelle ligne
                    row.classList.add('row'); // Ajouter la class "row"

                    // Ajouter les cellules à la ligne
                    row.innerHTML = `
                        <td class="col"><div class="form-floating mb-1">${i}</div></td>
                        <td class="col"><input type="text" class="form-control hArriv" oninput="calculateGarde(this)" onclick="enableInput(this)"></td>
                        <td class="col"><input type="text" class="form-control hDepart" oninput="calculateGarde(this)" onclick="enableInput(this)"></td>
                        <td class="col"><div class="form-floating mb-1 gardeResult"></div></td>
                    `;

                    dateDuJour = `${i}/02/2024`;

                    // Ajouter la ligne au tableau
                    table.appendChild(row);
                }

                //Activation de l'édition des champs
                function enableInput(element) {
                    element.removeAttribute("readonly");
                    element.focus();
                }

                // Créer un objet pour stocker les résultats
                const results = {};

                // Calcul du temps de garde
                function calculateGarde(element) {
                    const row = element.closest('tr');
                    const dayNumber = row.querySelector('.col:first-child').textContent;
                    const heureArrivee = row.querySelector('.hArriv').value;
                    const heureDepart = row.querySelector('.hDepart').value;
                    const gardeResult = row.querySelector('.gardeResult');

                    // Vérifier si les deux champs sont remplis
                    if (heureArrivee && heureDepart) {
                        // Conversion en nombre pour effectuer le calcul
                        const heureArriveeNb = parseFloat(heureArrivee);
                        const heureDepartNb = parseFloat(heureDepart);

                        // Calcul du temps de garde
                        const nbHeuresJour = heureDepartNb - heureArriveeNb;
                        
                        // Mise à jour de l'affichage du résultat
                        gardeResult.innerHTML = `<h6 class="contrat-text">${nbHeuresJour}</h6>`;

                        // Ajouter le résultat à l'objet des résultats
                        results[dayNumber] = nbHeuresJour;

                        // Mettre à jour le total
                        updateTotal();
                    }
                }

                function updateTotal() {
                    let total = 0;
                    for (let day in results) {
                        if (results.hasOwnProperty(day)) {
                            total += results[day];
                        }
                    }
                    totalHeures = total;
                    const totalCell = document.querySelector('.total-cell');
                    totalCell.innerHTML = `<h6 class="contrat-text">${totalHeures} Heures</h6>`;
                }
}

GestionTable()