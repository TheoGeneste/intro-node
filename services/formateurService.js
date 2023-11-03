const conn = require("./database")

const fetchFormateur = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT fo_id, fo_nom, fo_prenom, CONCAT('http://127.0.0.1:3000/formateur/', fo_id) as uri FROM formateur;`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

const fetchFormateurById = (id) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT fo_id, fo_nom, fo_prenom, CONCAT('http://127.0.0.1:3000/formateur/', fo_id) as uri FROM formateur WHERE fo_id=${id};`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    fetchFormateur,
    fetchFormateurById
}