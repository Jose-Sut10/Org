import { useState } from 'react';
import './App.css';
import Encabezado from './componentes/header/header';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/equipo';

function App() {
  const [mostrarFormulario, actualizarFormulario] = useState(false);
  const cambioMostrar = ()=>{
    actualizarFormulario(!mostrarFormulario);
  }

  //Ternario --> condicion ? semuestra : noseMuestra
  return (
    <div>
      <Encabezado/>
      {mostrarFormulario && <Formulario/>}
      <MiOrg estado={cambioMostrar}/>
      <Equipo nombreEquipo="Programación"/>
    </div>
  );
}

export default App;