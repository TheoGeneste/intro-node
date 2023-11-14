// wiki.js - Module route du wiki

const express = require("express");
const router = express.Router();
const mysql = require("mysql")

// Route vers la page d'accueil
// /wiki/
router.get("/", (req, res) => {
    res.send("Page d'accueil du wiki");
});

// Route vers la page à propos
// /wiki/about
router.get("/about", (req, res) => {
    res.send("À propos de ce wiki");
});

module.exports = router;

