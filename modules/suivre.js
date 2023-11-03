const express = require("express");
const router = express.Router();

// Route vers la page d'accueil
// /suivre/
router.get("/", (req, res) => {
    res.send("Page d'accueil les cours suivis");
});

// Route vers la page à propos
// /suivre/parametre
router.get("/:suivre", (req, res) => {
    res.send("suivre n° "+req.params.suivre);
});

module.exports = router;
