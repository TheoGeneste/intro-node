const express = require("express");
const router = express.Router();
const etablissementService = require("../services/etablissementService")
// const {fetchEtablissement} = require("../services/etablissementService")
const conn = require("../services/database");

// Route vers la page d'accueil
// /etablissement/
router.get("/", async (req, res) => {
    conn.query('SELECT eta_id, eta_nom, eta_ville FROM etablissement;', (err, data) => {
        if (err) throw err;
        res.status(200)
        res.json(data)
    });
});

// Route vers la page à propos
// /etablissement/parametre
router.get("/:etablissement", (req, res) => {
    res.send("Etablissement n° "+req.params.etablissement);
});

module.exports = router;
