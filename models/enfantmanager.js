import { db } from './dbmanager.js';

//Insertion d'un nouvel enfant dans la bdd
export const createEnfant = (enfantData) =>
{
    console.log(enfantData);
    const stmt = db.prepare('INSERT INTO Enfant (Nom, Prenom, IdContrat) VALUES (?, ?, ?)');
    const info = stmt.run(enfantData.nom, enfantData.prenom, enfantData.idContrat);
    if(info.changes == 1) {
        return info.lastInsertRowid
    }
    return -1;
}

//Sélectionne le dernier enfant créé avec son id
export const getEnfant = () =>
{
    const sql = "SELECT * from Enfant WHERE IdEnfant = (SELECT MAX(IdEnfant) FROM Enfant)";
    let statement = db.prepare(sql);
    let res = statement.all();
    return res;
}

//Sélectionne un profil enfant enregistré avec son id donné
export const getInfoEnfant = (etatContrat) => {
    
    // V1 - Code pour les infos d'un seul enfant 
    /*const sql = "SELECT * FROM Enfant WHERE IdEnfant = ?";
    let statement = db.prepare(sql);
    let res = statement.all(idEnfant);
    return res; */

    // V2 - Code pour tous les enfants 
    /* const sql = "SELECT * FROM Enfant";
    let statement = db.prepare(sql);
    let res = statement.all();
    return res; */

    // Vfinale - Code selon l'etat du contrat
    const sql = `
        SELECT Enfant.*
        FROM Enfant
        INNER JOIN Contrat ON Enfant.IdContrat = Contrat.IdContrat
        WHERE Contrat.Etat = ?
    `;
    const statement = db.prepare(sql);
    const res = statement.all(etatContrat);
    return res;

}