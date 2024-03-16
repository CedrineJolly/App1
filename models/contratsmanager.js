import { db } from './dbmanager.js';

//test pour obtenir toutes les infos de la classe Contrat de la bdd
export const getContrats = () =>
{
    const sql = "SELECT * from Contrat";
    let statement = db.prepare(sql);
    let res = statement.all();
    return res;
}

//Sélectionne le dernier contrat créé avec son id
export const getTheContrat = () =>
{
    const sql = "SELECT * from Contrat WHERE IdContrat = (SELECT MAX(IdContrat) FROM Contrat)";
    let statement = db.prepare(sql);
    let res = statement.all();
    return res;
}

//insertion d'un nouveau contrat dans la bdd
export const createContrat = (contratData) =>
{
    console.log(contratData);
    const stmt = db.prepare('INSERT INTO Contrat (Type, TarifHoraire, NbSemaines, TpsLun, TpsMar, TpsMer, TpsJeu, TpsVen, AideCaf, Etat) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
    const info = stmt.run(contratData.type, contratData.tarifHoraire, contratData.nbSemaines, contratData.heuresLundi, contratData.heuresMardi, contratData.heuresMercredi, contratData.heuresJeudi, contratData.heuresVendredi, contratData.aideCaf, contratData.etat);
    if(info.changes == 1) {
        return info.lastInsertRowid
    }
    return -1;
}

//suppression d'un contrat de la base de données en fonction de son id
export const deleteContrat = () => {
    const stmt = db.prepare('DELETE FROM Contrat WHERE IdContrat = (SELECT MAX(IdContrat) FROM Contrat)');
    const info = stmt.run();
    if (info.changes === 1) {
        console.log('Le contrat a été supprimé avec succès.');
        return true; // La suppression a réussi
    } else {
        console.log('Erreur lors de la suppression du contrat.');
        return false; // La suppression a échoué
    }
}

export const updateEtatContrat = (idEnfant, nouvelEtat) => {
    console.log(idEnfant, nouvelEtat);
    // Récupération de l'id contrat associé à l'enfant
    const contratInfo = db.prepare('SELECT Contrat.IdContrat FROM Contrat INNER JOIN Enfant ON Contrat.IdContrat = Enfant.IdContrat WHERE Enfant.IdEnfant = ?').get(idEnfant);
    if (!contratInfo) {
        throw new Error('Aucun contrat trouvé pour cet enfant');
    }

    // Mise à jour de l'état du contrat
    const stmt = db.prepare('UPDATE Contrat SET Etat = ? WHERE IdContrat = ?');
    const info = stmt.run(nouvelEtat, contratInfo.IdContrat);
    if (info.changes === 1) {
        return true;
    }
    return false;
};