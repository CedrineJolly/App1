import Database from 'better-sqlite3';
export const db = new Database('./database.db', {
    fileMustExist: true // on ne créé par un nouveau fichier car il est nécessaire d'avoir un fichier .db contenant le modèle de données déjà créé
});
