const express = require("express");
const router = express.Router();

// Route vers la page d'accueil
// /etablissement/
router.get("/", (req, res) => {
    res.send("Page d'accueil de l'établissement");
});

// Route vers la page à propos
// /etablissement/parametre
router.get("/:etablissement", (req, res) => {
    res.send("Etablissement n° "+req.params.etablissement);
});

module.exports = router;
