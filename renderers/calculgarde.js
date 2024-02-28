/*
 * Calcule le temps de garde par jour avec les données précédentes

function enableInput(element) {
        element.removeAttribute("readonly");
        element.focus();
    }

    function calculateGarde() {
        const heureArrivee = document.getElementById('hArriv').value;
        const heureDepart = document.getElementById('hDepart').value;

        // Vérifier si les deux champs sont remplis
        if (heureArrivee && heureDepart) {
            // Conversion en nombre pour effectuer le calcul
            const heureArriveeNumber = parseFloat(heureArrivee);
            const heureDepartNumber = parseFloat(heureDepart);

            // Calcul du temps de garde
            const NbHeuresJour = heureDepartNumber - heureArriveeNumber;

            // Mise à jour de l'affichage du résultat
            document.getElementById('gardeResult').innerHTML = `<h6 class="contrat-text">${NbHeuresJour}</h6>`;
        }
    }*/