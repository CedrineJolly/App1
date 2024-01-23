var dbmanager = require('dbmanager');
var db = dbmanager.db;

//test pour obtenir toutes les infos de la classe Contrat de la bdd
exports.getNames()
{
    const sql = "SELECT * from Contrat";
    let statement = db.prepare(sql);
    let res = statement.all();
    return res
}