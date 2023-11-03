const express = require("express");
// const {etudiants} = require("./modules/scolarite");
// const wiki = require("./modules/wiki.js");
const etablissement = require("./modules/etablissement")
const etudiant = require("./modules/etudiant");
const formateur = require("./modules/formateur");
const suivre = require("./modules/suivre");
const ue = require("./modules/ue");
const proposer = require("./modules/proposer");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});
//
// app.get("/etudiants", (req, res) => {
//     res.send(etudiants)
// })

// app.use("/wiki", wiki);

// Route de etablissement dans fichier etablissement.js
app.use("/etablissement", etablissement);

// Route de etudiant dans fichier etudiant.js
app.use("/etudiant", etudiant);

// Route de formateur dans fichier formateur.js
app.use("/formateur", formateur);

// Route de suivre dans fichier suivre.js
app.use("/suivre", suivre);

// Route de ue dans fichier ue.js
app.use("/ue", ue);

// Route de ue dans fichier ue.js
app.use("/proposer", proposer);

app.listen(port, () => {
    console.log(`Application exemple à l'écoute sur le port http://127.0.0.1:${port}/ !`);
    console.log(`Route étudiant : http://127.0.0.1:${port}/etudiants !`);
});