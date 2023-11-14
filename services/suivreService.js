const conn = require("./database")

const fetchSuivre = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT etudiant.etu_id, ue.ue_id, ue_label, etu_nom, etu_prenom,
                          concat('http://127.0.0.1:3000/suivre/', suivre.etu_id, '/etudiant') as uri_etudiant,
                          concat('http://127.0.0.1:3000/suivre/', suivre.ue_id, '/ue') as uri_ue
                   FROM scolarite.suivre
                            INNER JOIN scolarite.ue ON suivre.ue_id = ue.ue_id
                            INNER JOIN scolarite.etudiant ON suivre.etu_id = etudiant.etu_id;`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}
const fetchSuivreByIDForEtudiant = (id) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT suivre.etu_id, suivre.ue_id, etudiant.etu_nom, etudiant.etu_prenom, CONCAT('http://127.0.0.1:3000/etudiant/',etudiant.etu_id) as uri_etudiant, 
       ue.ue_label, CONCAT('http://127.0.0.1:3000/ue/',ue.ue_id) as uri_ue
                   FROM suivre
                            INNER JOIN etudiant ON etudiant.etu_id = suivre.etu_id
                            INNER JOIN ue ON ue.ue_id = suivre.ue_id
                   WHERE suivre.etu_id = ${id};`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

const fetchSuivreByIDForUE = (id) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT suivre.etu_id, suivre.ue_id, etudiant.etu_nom, etudiant.etu_prenom, CONCAT('http://127.0.0.1:3000/etudiant/',etudiant.etu_id) as uri_etudiant, ue.ue_label, CONCAT('http://127.0.0.1:3000/ue/',ue.ue_id) as uri_ue
                   FROM suivre
                            INNER JOIN etudiant ON etudiant.etu_id = suivre.etu_id
                            INNER JOIN ue ON ue.ue_id = suivre.ue_id
                   WHERE suivre.ue_id = ${id};`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    fetchSuivre,
    fetchSuivreByIDForEtudiant,
    fetchSuivreByIDForUE
}