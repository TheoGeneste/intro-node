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

module.exports = {
    fetchEtudiant
}