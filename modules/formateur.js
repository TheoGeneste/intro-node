const express = require("express");
const formateurService = require("../services/formateurService");
const router = express.Router();

// Route vers la page d'accueil
// /formateur/
router.get("/", (req, res) => {
    formateurService.fetchFormateur().then(result => {
        res.status(200)
        res.json(result);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});

// Route vers la page à propos
// /formateur/parametre
router.get("/:formateur", (req, res) => {
    res.send("Formateur n° "+req.params.formateur);
});

module.exports = router;
