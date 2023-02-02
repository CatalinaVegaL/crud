//Conexion con mongoose para conectar MongoDb con el servidor
const { connect } = require('http2');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmern');

//asignacion de variable a la conexion
const objetobd = mongoose.connection

//Validación de conexion por consolaa (similar a las promesas)
objetobd.on('connected', () => {console.log('Conexion correcta con mongoDB')})
objetobd.on('error', () => {console.log('Error en conexion con mongoDB')})

//exportacion de mongoose
module.exports = mongoose