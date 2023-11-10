const express = require("express");
const ueService = require("../services/ueService");
const router = express.Router();

// Route vers la page d'accueil
// /ue/
router.get("/", (req, res) => {
    ueService.fetchUE().then(result => {
        res.status(200)
        res.json(result);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});

// Route vers la page à propos
// /ue/parametre
router.get("/:ue", (req, res) => {
    ueService.fetchUEByID(req.params.ue).then(result => {
        res.status(200)
        res.json(result[0]);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});

module.exports = router;
