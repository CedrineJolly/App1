import { db } from './dbmanager.js';

// Insertion d'un nouvel horaire de garde
export const putGarde = (gardeData) =>
{
    console.log(gardeData);
    const stmt = db.prepare('INSERT INTO Garde (Date, NbHeures, IdEnfant, HArriv, HDepart) VALUES (?, ?, ?, ?, ?)');
    const info = stmt.run(gardeData.date, gardeData.nbHeures, gardeData.idEnfant, gardeData.hArriv, gardeData.hDepart);
    if(info.changes == 1) {
        return info.lastInsertRowid
    }
    return -1;
}

//Retourne la garde liée à l'id de l'enfant
export const getGardeByIdEnfant = (idEnfant) =>
{
    const sql = "SELECT * from Garde WHERE idEnfant = ?";
    let statement = db.prepare(sql);
    let res = statement.get(idEnfant);
    return res;
}

//Retourne la garde liée à l'id de l'enfant
export const getGardeByIdEnfantAndDate = (idEnfant, date) =>
{
    const sql = "SELECT * from Garde WHERE idEnfant = ? AND date = ?";
    let statement = db.prepare(sql);
    let res = statement.get(idEnfant, date);
    return res;
}