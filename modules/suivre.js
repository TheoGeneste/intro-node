const express = require("express");
const suivreService = require("../services/suivreService");
const router = express.Router();

// Route vers la page d'accueil
// /suivre/
router.get("/", (req, res) => {
    suivreService.fetchSuivre().then(result => {
        res.status(200)
        res.json(result);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});

// Route vers la page à propos
// /suivre/parametre
router.get("/:suivre", (req, res) => {
    res.send("suivre n° "+req.params.suivre);
});

module.exports = router;
