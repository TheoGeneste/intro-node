const express = require("express");
const router = express.Router();

// Route vers la page d'accueil
// /formateur/
router.get("/", (req, res) => {
    res.send("Page d'accueil du formateur");
});

// Route vers la page à propos
// /formateur/parametre
router.get("/:formateur", (req, res) => {
    res.send("Formateur n° "+req.params.formateur);
});

module.exports = router;
