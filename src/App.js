import { useState } from 'react';
import './App.css';
import Encabezado from './componentes/header/header';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/MiOrg';

function App() {
  const [mostrarFormulario, actualizarFormulario] = useState(true);
  const cambioMostrar = ()=>{
    actualizarFormulario(!mostrarFormulario);
  }

  //Ternario --> condicion ? semuestra : noseMuestra
  return (
    <div>
      <Encabezado/>
      {mostrarFormulario && <Formulario/>}
      <MiOrg estado={cambioMostrar}/>
    </div>
  );
}

export default App;