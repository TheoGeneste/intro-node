const express = require("express");
const conn = require("../services/database");
const router = express.Router();

// Route vers la page d'accueil
// /etudiant/
router.get("/", (req, res) => {
    conn.query('SELECT etu_id, etu_nom, etu_prenom, etu_numero, CONCAT("http://127.0.0.1:3000/etudiant/",etu_id) as uri FROM scolarite.etudiant;', (err, data) => {
        if (err) throw err;
        res.status(200)
        res.json(data)
    });
});

// Route vers la page à propos
// /etudiant/parametre
router.get("/:etudiant", (req, res) => {
    res.send("Etudiant n° "+req.params.etudiant);
});

module.exports = router;
