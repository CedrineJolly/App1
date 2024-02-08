import { db } from './dbmanager.js';

//test pour obtenir toutes les infos de la classe Contrat de la bdd
export const getContrats = () =>
{
    const sql = "SELECT * from Contrat";
    let statement = db.prepare(sql);
    let res = statement.all();
    return res;
}

//insertion d'un nouveau contrat
export const createContrat = (contratData) =>
{
    const stmt = db.prepare('INSERT INTO Contrat (nom, prenom, tpsLundi) VALUES (?, ?, ?)');
    const info = stmt.run(contratData.nom, contratData.prenom, contratData.heuresLundi);
    if(info.changes == 1) {
        return info.lastInsertRowid
    }
    return -1;
}