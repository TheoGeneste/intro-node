const express = require("express");
const router = express.Router();

// Route vers la page d'accueil
// /ue/
router.get("/", (req, res) => {
    res.send("Page d'accueil de l'ue");
});

// Route vers la page à propos
// /ue/parametre
router.get("/:ue", (req, res) => {
    res.send("UE n° "+req.params.ue);
});

module.exports = router;
