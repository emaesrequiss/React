import React, { Fragment } from "react";

const Formulario = () => { 

    // Crear State de Citas
    const [citas, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
    });

    const actualizarState = e=> {
        actualizarCita({
            [e.target.name]: e.target.useDebugValue
        });  

    const {mascota, propietario, fecha,hora, sintomas};  

  return (
    <Fragment>
      <h2>Crear Cita</h2>

      <form>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarSatate} 
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño"
          onChange={actuslizarState}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarSatate}
        />

        <label>Hora</label>
        <input
           type="time"
           name="hora"
           className="u-full-width"
           onChange={actualizarSatate}
          />
        
        <label>Síntomas</label>
        <textarea
           className="u-full-width"
           name="sintomas"
           onChange={actualizarSatate}
        ></textarea>

        <button
            type="submit"
            className="u-full-width buttom-primary" 
        >Agregar cita</button>
      </form>
    </Fragment>

  );
};

exportFormulario};

