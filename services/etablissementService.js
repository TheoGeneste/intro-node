const conn = require("./database")

const fetchEtablissement = async () => {
    let response = [];
    await conn.query('SELECT eta_id, eta_nom, eta_ville FROM etablissement;', (err, rows, fields) => {
        if (err) throw err
        response = rows.json(data)
        return rows.json(data)
    })
    console.log(response)
}

module.exports = {
    fetchEtablissement
}