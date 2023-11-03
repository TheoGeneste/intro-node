const express = require("express");
const router = express.Router();
const etablissementService = require("../services/etablissementService")
// const {fetchEtablissement} = require("../services/etablissementService")
const conn = require("../services/database");

// Route vers la page d'accueil
// /etablissement/
router.get("/", async (req, res) => {
    etablissementService.fetchEtablissement().then(result => {
        res.status(200)
        res.json(result);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});

// Route vers la page à propos
// /etablissement/parametre
router.get("/:etablissement", (req, res) => {
    etablissementService.fetchEtablissementByID(req.params.etablissement).then(result => {
        res.status(200)
        res.json(result);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});

module.exports = router;
