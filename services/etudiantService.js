const conn = require("./database")

const fetchEtudiant = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT etu_id, etu_nom, etu_prenom, etu_numero, CONCAT("http://127.0.0.1:3000/etudiant/",etu_id) as uri FROM etudiant;`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

const fetchEtudiantById = (id) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT etu_id, etu_nom, etu_prenom, etu_numero, CONCAT("http://127.0.0.1:3000/etudiant/",etu_id) as uri FROM etudiant WHERE etu_id=${id};`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

const addEtudiant = (etudiant) => {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO etudiant (etu_nom, etu_prenom, etu_adresse, etu_numero, etu_mail) VALUES ('${etudiant.nom}', '${etudiant.prenom}', '${etudiant.adresse}', '${etudiant.numero}', '${etudiant.mail}')`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    fetchEtudiant,
    fetchEtudiantById,
    addEtudiant
}