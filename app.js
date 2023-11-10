const express = require("express");
// const {etudiants} = require("./modules/scolarite");
// const wiki = require("./modules/wiki.js");
const etablissement = require("./modules/etablissement")
const etudiant = require("./modules/etudiant");
const formateur = require("./modules/formateur");
const suivre = require("./modules/suivre");
const ue = require("./modules/ue");
const proposer = require("./modules/proposer");
const cors = require("cors");
const app = express();
const port = 3000;

// app.use(cors({
//     origin: 'http://127.0.0.1:3001'
// }));
var allowedOrigins = ['http://localhost:3001',
    'http://127.0.0.1:3001'];

app.use(cors({
    origin: function(origin, callback){    // allow requests with no origin
        // (like mobile apps or curl requests)
        if(!origin) return callback(null, true);    if(allowedOrigins.indexOf(origin) === -1){
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }    return callback(null, true);
    }
}));

app.get("/", (req, res) => {
    res.send("Hello World!");
});
//
// app.get("/etudiants", (req, res) => {
//     res.send(etudiants)
// })

// app.use("/wiki", wiki);

// Route de etablissement dans fichier etablissement.js
// const etablissement = require("./modules/etablissement")
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