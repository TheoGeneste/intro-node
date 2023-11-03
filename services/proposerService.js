const conn = require("./database")

const fetchProposer = () => {
    return new Promise((resolve, reject) => {
        let sql = `Select proposer.eta_id, proposer.ue_id, etablissement.eta_nom, ue_label,
                          concat('http://127.0.0.1:3000/proposer/', proposer.eta_id, '/etablissement') as uri_etablissement,
                          concat('http://127.0.0.1:3000/proposer/', proposer.ue_id, '/ue') as uri_ue
                   FROM proposer
                            INNER JOIN etablissement ON proposer.eta_id = etablissement.eta_id
                            INNER JOIN ue ON proposer.ue_id = ue.ue_id;`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    fetchProposer
}