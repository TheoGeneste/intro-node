const conn = require("./database")

const fetchUE = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT ue_id, ue_label, concat('http://127.0.0.1:3000/ue/',ue_id) as uri FROM ue;`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    fetchUE
}