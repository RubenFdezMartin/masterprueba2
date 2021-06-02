const express = require('express');
const app = express();
const morgan = require('morgan');
//importo path para que funciones indistintamente del sistema operativo
const path = require('path');


// configuracion
app.set('port', 5000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares (componentes intermedios de la aplicación)
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// rutas de la aplicacion
app.use(require('./routes/index'));

// archivos estáticos (lo de carpeta public)
app.use(express.static(path.join(__dirname, 'public')));

// 404 (manejador de página no encontradas)
app.use((req, res, next) => {
    res.status(404).send('404 NO ENCONTRADO');
});

module.exports = app;