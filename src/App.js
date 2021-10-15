import React , {Fragment} from "react";
import Formulario from "./componentes/Formulario";

function App() {
  return (
    <Fragment>
      <h1>Administración de Pacientes</h1>
    <div className="container">
      <div className="row">
        <div className="first-half column">
          <Formulario/>
        </div>
        <div className="first-half column">

        </div>
      </div>

    </div>
    </Fragment>
  );
}

export default App;
