const express = require("express");
const jwt = require('jsonwebtoken')
// const {etudiants} = require("./modules/scolarite");
// const wiki = require("./modules/wiki.js");
const etablissement = require("./modules/etablissement")
const etudiant = require("./modules/etudiant");
const formateur = require("./modules/formateur");
const suivre = require("./modules/suivre");
const ue = require("./modules/ue");
const proposer = require("./modules/proposer");
const images = require("./modules/images");
const cors = require("cors");
const etudiantService = require("./services/etudiantService");
const loginService = require("./services/loginServices");
const {RowDataPacket} = require("mysql/lib/protocol/packets");
const app = express();
const port = 3000;
const SECRET = 'toto';

/* Récupération du header bearer */
const extractBearerToken = headerValue => {
    if (typeof headerValue !== 'string') {
        return false
    }

    const matches = headerValue.match(/(bearer)\s+(\S+)/i)
    return matches && matches[2]
}

/* Vérification du token */
const checkTokenMiddleware = (req, res, next) => {
    // Récupération du token
    const token = req.headers.authorization && extractBearerToken(req.headers.authorization)

    // Présence d'un token
    if (!token) {
        return res.status(401).json({ message: 'Token inexistant' })
    }

    // Véracité du token
    jwt.verify(token, SECRET, (err, decodedToken) => {
        if (err) {
            res.status(401).json({ message: 'Error. Mauvais token' })
        } else {
            return next()
        }
    })
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// app.use(cors({
//     origin: 'http://127.0.0.1:3001'
// }));
const allowedOrigins = ['http://localhost:3001',
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
/* Formulaire de connexion */
app.post('/login', (req, res) => {
    // Pas d'information à traiter
    if (!req.body.login || !req.body.password) {
        return res.status(400).json({ message: 'Error. Please enter the correct login and password' })
    }
    // Checking
    loginService.login(req.body).then(result => {
        // console.log(result[0])
        // if (result[0] instanceof RowDataPacket) {
        //     res.status(400).json({ message: 'Error. Wrong login or password' })
        // }

        const token = jwt.sign({
            user : result[0],
            role : "ROLE_ADMIN"
        }, SECRET, { expiresIn: '3 hours' })

        res.json({ access_token: token })
    }).catch(err => {
        console.error("Oops...", err);
    });

})

app.get("/", checkTokenMiddleware, (req, res) => {
    const token = req.headers.authorization && extractBearerToken(req.headers.authorization)
    // Décodage du token
    const decoded = jwt.decode(token, { complete: false })

    if (decoded != null && decoded != undefined) {
        res.send("Hello World!");
    }else{

    }
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

app.use('/images', images)

app.listen(port, () => {
    console.log(`Application exemple à l'écoute sur le port http://127.0.0.1:${port}/ !`);
    console.log(`Route étudiant : http://127.0.0.1:${port}/etudiants !`);
});