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

module.exports = {
    fetchSuivre
}