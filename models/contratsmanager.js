import { db } from './dbmanager.js';

//test pour obtenir toutes les infos de la classe Contrat de la bdd
export const getContrats = () =>
{
    const sql = "SELECT * from Contrat";
    let statement = db.prepare(sql);
    let res = statement.all();
    return res;
}

//insertion d'un nouveau contrat dans la bdd
export const createContrat = (contratData) =>
{
    console.log(contratData);
    const stmt = db.prepare('INSERT INTO Contrat (TpsLun, TpsMar, TpsMer, TpsJeu, TpsVen) VALUES (?, ?, ?, ?, ?)');
    const info = stmt.run(contratData.nom, contratData.prenom, contratData.heuresLundi);
    if(info.changes == 1) {
        return info.lastInsertRowid
    }
    return -1;
}

