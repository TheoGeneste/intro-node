const express = require("express");
const conn = require("../services/database");
const etudiantService = require("../services/etudiantService");
const router = express.Router();

// Route vers la page d'accueil
// /etudiant/
router.get("/", (req, res) => {
    etudiantService.fetchEtudiant().then(result => {
        res.status(200)
        res.json(result);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});

// Route vers la page à propos
// /etudiant/parametre
router.get("/:etudiant", (req, res) => {
    etudiantService.fetchEtudiantById(req.params.etudiant).then(result => {
        res.status(200)
        res.json(result);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});

module.exports = router;
