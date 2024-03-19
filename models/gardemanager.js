import { db } from './dbmanager.js';

// Insertion d'un nouvel horaire de garde
export const putGarde = (gardeData) =>
{
    console.log(gardeData);
    const stmt = db.prepare('INSERT INTO Garde (Date, NbHeures, IdEnfant, HArriv, HDepart) VALUES (?, ?, ?, ?, ?)');
    const info = stmt.run(gardeData.date, gardeData.nbHeures, gardeData.idEnfant);
    if(info.changes == 1) {
        return info.lastInsertRowid
    }
    return -1;
}