const conn = require("./database")

const fetchEtablissement = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT eta_id, eta_nom, eta_ville FROM etablissement;`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

const fetchEtablissementByID = (id) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT eta_id, eta_nom, eta_ville FROM etablissement WHERE eta_id = ${id};`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    fetchEtablissement,
    fetchEtablissementByID
}