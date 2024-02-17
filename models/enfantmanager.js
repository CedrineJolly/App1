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