const express = require('express')
const router = express.Router()
//Importacion de mongoose 
const mongoose = require('mongoose');
//Asignacion de esquema de datos
const eschema = mongoose.Schema

//Definicion de esquema de datos
const eschemausuario = new eschema ({
    nombre: String,
    email: String,
    telefono: String, 
    idusuario: String
})

//Asignacion del esquema de datos, que se empleara en 
const ModeloUsuario = mongoose.model ('usuarios', eschemausuario)
module.exports = router

/* Ruta de prueba 
    router.get('/ejemplo', (req, res) => {
    res.end('Saludo carga desde ruta ejemplo')
}) */

router.post('/agregarusuario', (req, res) => {
    const nuevoUsuario = new ModeloUsuario ({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body,idusuario,
    })
    nuevoUsuario.save(function(err){
        if (!err) {
            res.send('Usuario agregado correctamente')
        }
        else {
            res.send(err)
        }
    })
})
