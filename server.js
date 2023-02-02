//Importacion de express
const express = require("express");
const app = express();
//Importacion conexion de MongoDB por medio de mongoose desde el componente conexion
const archivoDB = require("./conexion");
//Importacion de archivo de rutas y modelo del componente usuario
const rutausuario = require("./rutas/usuario");
//Importacion de body parser
const bodyParser = require("body-parser");

//Transformacion de datos a string por medio de la libreria body-parser para que sean visualizados por el cliente
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "true" }));

//app.use() se usa para montar la función de middleware especificada (son las funciones que tienen acceso al objeto de solicitud y al objeto de respuesta, o podemos llamarlo un ciclo de solicitud de respuesta) en la ruta que se está especificando.
app.use("/api/usuario", rutausuario);

//app.get(): esta función le dice al servidor qué hacer cuando recibe requests en una ruta determinada.
app.get("/", (req, res) => {
  res.end("Bienvenidos al servidor backend node");
});

//Configuracion del servidor basico, especifica que puerto escuchara el backend
app.listen(5000, function () {
  console.log("El servidor está corriendo correctamente");
});
