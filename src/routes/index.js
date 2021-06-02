const { Router } = require('express');
const router = Router();

const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

//lectura de datos del archivo master.json
const v_inicio = fs.readFileSync('src/master.json', 'utf-8');

const v = JSON.parse(v_inicio);

//peticion GET a la raíz de la aplicacion
router.get('/', (req, res) => {
    res.render('index.ejs', {
        v
    });
});

//peticion GET a la url /nueva-entrada
router.get('/nueva-entrada', (req, res) => {
    res.render('nueva-entrada.ejs');
});


module.exports = router;