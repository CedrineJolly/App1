var dbmanager = require('./dbmanager.js');
var db = dbmanager.db;

//test pour obtenir toutes les infos de la classe Contrat de la bdd
exports.getContrats = () =>
{
    const sql = "SELECT * from Contrat";
    let statement = db.prepare(sql);
    let res = statement.all();
    return res;
}