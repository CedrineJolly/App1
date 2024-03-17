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
//Suppression d'un enfant dans la bdd
export const deleteEnfant = (idEnfant) =>
{
    console.log(`Suppression de l'enfant ${idEnfant}`);
    const stmt = db.prepare('DELETE FROM Enfant WHERE IdEnfant = ?');
    const info = stmt.run(idEnfant);
    if(info.changes == 1) {
        return info.lastInsertRowid
    }
    return -1;
}
//Suppression des enfants liés à un contrat dans la bdd
export const deleteEnfantsFromIdContrat = (idContrat) =>
{
    console.log(`Suppression des enfants liés au contrat ${idContrat}`);
    const stmt = db.prepare('DELETE FROM Enfant WHERE IdContrat = ?');
    const info = stmt.run(idContrat);
    console.log(`Suppression de ${info.changes} enfants`)
    return info;
}

//Retourne l enfant selon son id
export const getEnfant = (idEnfant) =>
{
    const sql = "SELECT * from Enfant WHERE IdEnfant = ?";
    let statement = db.prepare(sql);
    let res = statement.get(idEnfant);
    return res;
}

//Retourne l enfant lié a l'id de contrat
export const getEnfantByIdContrat = (idContrat) =>
{
    const sql = "SELECT * from Enfant WHERE idContrat = ?";
    let statement = db.prepare(sql);
    let res = statement.get(idContrat);
    return res;
}

//Sélectionne un profil enfant enregistré avec son id donné
export const getInfoEnfant = () => {
    
    // Code pour les infos d'un seul enfant 
    /*const sql = "SELECT * FROM Enfant WHERE IdEnfant = ?";
    let statement = db.prepare(sql);
    let res = statement.all(idEnfant);
    return res;*/
    const sql = "SELECT * FROM Enfant";
    let statement = db.prepare(sql);
    let res = statement.all();
    return res;
}