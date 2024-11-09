//import React from "react";
import { useState } from "react";
import Card from "./card";

const Form = () => {
  const [mascota, setMascota] = useState({
    nombre: "",
    raza: "",
  });

  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      mascota.raza.length>3 &&
      mascota.nombre.length>6
    ) {
      setMostrar(true);
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <div>
        {mostrar? (
            <Card nombre={mascota.nombre}/>
        ):(
        <form onSubmit={handleSubmit}>
            {/*onsubmit*/}
          <label> Tipo de Mascota:</label>
            {/*onchange*/}
          <input
            type="text"
            onChange={(event) =>
              setMascota({ ...mascota, raza: event.target.value })
            }
          />
          <p></p>
          <label>Nombre de tu mascota:</label>
          <input
            type="text"
            onChange={(event) =>
              setMascota({ ...mascota, nombre: event.target.value })
            }
          />
          <p>            
          </p>
          <button>Registrar</button>
          {error && (
            <h4 style={{ color: "red" }}>
              Por favor chequea que la información sea correcta
            </h4>
          )}      
        </form>
    )};  
     </div>
    );
};
export default Form;
