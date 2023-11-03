const express = require("express");
const proposerService = require("../services/proposerService");
const router = express.Router();

// Route vers la page d'accueil
// /proposer/
router.get("/", (req, res) => {
    proposerService.fetchProposer().then(result => {
        res.status(200)
        res.json(result);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});

// Route vers la page à propos
// /proposer/parametre
router.get("/:proposer", (req, res) => {
    res.send("Proposer n° "+req.params.proposer);
});

module.exports = router;
