/*
 * Ajout d'un temps de garde selon la date dans la bdd
 */

//Lorsque la case du tableau est remplie, enregistrement

document.getElementById('saveEnfant').addEventListener('click', async (evt) => {
  evt.preventDefault();

    try {
      let date = dateDuJour;
      let nbHeures = totalHeures;
      let hArriv = heureArriveeNb;
      let hDepart = heureDepartNb;

      if(idEnfant > 0) {
        const idGarde = window.bridge.putGarde({
          date: date,
          nbHeures: nbHeures,
          idEnfant: idEnfant,
          hDepart: hArriv,
          hDepart: hDepart


        })}
    }
    catch (error) {
        console.error(error);
    }
});
