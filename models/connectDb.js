/*Fichier test pour connecter la bdd
const sqlite3 = require('sqlite3');
const dbname = 'Database.db';

//Ouverture de la base de données
let db = new sqlite3.Database(dbname, sqlite3.OPEN_READWRITE, err => {
    if(err)
        throw err
    console.log('Database started ON' + dbname)
})

//Fermeture de la base de données
db.close(err => {
    if(err)
        throw err
    console.log('Database closed.')
})*/
