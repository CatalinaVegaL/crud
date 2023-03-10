import React, { useState } from "react";
import uniqid from "uniqid";
import axios from "axios";

//Conponente para agregar usuarios nuevos
function AgregarUsuario() {
  //Hooks de react
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  //Funcionamiento del boton de verde de guardar informacion del usuario
  function agregarUsuario() {
    var usuario = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      idusuario: uniqid(),
    };
    
    console.log(usuario);

    //Funcionamiento de solicitudes http
    //Axios busca el metodo agregarusuario que se encuentra en usuario.js
    axios
      .post("/api/usuario/agregarusuario", usuario)
      .then((res) => {
        alert(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }

  return (
    //Importacion de componente de Bootstrap para formulario
    <div className="container">
      <div className="row">
        <h2 className="mt-4">Agregar usuarios</h2>
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              email
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">
              Telefono
            </label>
            <input
              type="text"
              className="form-control"
              value={telefono}
              onChange={(e) => {
                setTelefono(e.target.value);
              }}
            ></input>
          </div>
          <button onClick={agregarUsuario} className="btn btn-success">
            Guardar usuario
          </button>
        </div>
      </div>
    </div>
  );
}

export default AgregarUsuario;
