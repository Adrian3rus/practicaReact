import { useState } from "react";

function NombreEnTiempoReal() {
  const [nombre, setNombre] = useState('');

  const manejarCambio = (e) => {
    setNombre(e.target.value);
  };

  return (
    <div>
      <h2>Escribí tu nombre:</h2>
      <input
        type="text"
        placeholder="nombre..."
        value={nombre}
        onChange={manejarCambio}
      />
      <p>Hola, {nombre ? nombre : 'desconocido'}</p>
    </div>
  );
}

export default NombreEnTiempoReal;
