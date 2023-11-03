const express = require("express");
const router = express.Router();

// Route vers la page d'accueil
// /proposer/
router.get("/", (req, res) => {
    res.send("Page d'accueil de proposer");
});

// Route vers la page à propos
// /proposer/parametre
router.get("/:proposer", (req, res) => {
    res.send("Proposer n° "+req.params.proposer);
});

module.exports = router;
