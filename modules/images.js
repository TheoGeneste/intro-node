const express = require("express");
const router = express.Router();

router.get('/utilisateur/:image', (req, res) => {
    res.setHeader('content-type', 'image/png');
    res.sendFile('C:\\Users\\Théo\\Documents\\FcDigital\\Formations\\Node\\Intro\\images\\utilisateurs\\'+req.params.image+'.png')
})


module.exports = router;
