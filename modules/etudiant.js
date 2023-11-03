const express = require("express");
const router = express.Router();

// Route vers la page d'accueil
// /etudiant/
router.get("/", (req, res) => {
    res.send("Page d'accueil de l'etudiant");
});

// Route vers la page à propos
// /etudiant/parametre
router.get("/:etudiant", (req, res) => {
    res.send("Etudiant n° "+req.params.etudiant);
});

module.exports = router;
