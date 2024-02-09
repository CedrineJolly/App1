import { db } from './dbmanager.js';

//insertion d'un nouvel enfant dans la bdd
export const createEnfant = (enfantData) =>
{
    console.log(enfantData);
    const stmt = db.prepare('INSERT INTO Enfant (Nom, Prenom) VALUES (?, ?)');
    const info = stmt.run(enfantData.nom, enfantData.prenom);
    if(info.changes == 1) {
        return info.lastInsertRowid
    }
    return -1;
}