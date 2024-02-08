import { db } from './dbmanager.js';

//test pour obtenir toutes les infos de la classe Contrat de la bdd
export const getContrats = () =>
{
    const sql = "SELECT * from Contrat";
    let statement = db.prepare(sql);
    let res = statement.all();
    return res;
}
