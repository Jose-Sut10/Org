import { useState } from 'react';
import {v4 as uuid} from "uuid"
import './App.css';
import Encabezado from './componentes/header/header';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/equipo';
import Footer from './componentes/footer';

function App() {
  const [mostrarFormulario, actualizarFormulario] = useState(false);
  const [listaEquipos, actualizarListaEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278", 
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA", 
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157", 
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69", 
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF", 
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05", 
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29", 
      colorSecundario: "#FFEEDF"
    }
  ]);
  const [datos, mostrarDatos] = useState([
  {
    id: uuid(),
    equipoColab: "Front End",
    fotoColab: "https://github.com/harlandlohora.png",
    nombreColab: "Harland Lohora",
    puestoColab: "Instructor"
  },
  {
    id: uuid(),
    equipoColab: "Programación",
    fotoColab: "https://github.com/genesysaluralatam.png",
    nombreColab: "Genesys Rondón",
    puestoColab: "Desarrolladora de software e instructora"
  },
  {
    id: uuid(),
    equipoColab: "Programación",
    fotoColab: "https://github.com/christianpva.png",
    nombreColab: "Christian Velasco",
    puestoColab: "Head de Alura e instructor"
  },
  {
    id: uuid(),
    equipoColab: "UX y Diseño",
    fotoColab: "https://github.com/JeanmarieAluraLatam.png",
    nombreColab: "Jeanmarie Quijada",
    puestoColab: "Instructora en Alura Latam"
  },
  {
    id: uuid(),
    equipoColab: "Innovación y Gestión",
    fotoColab: "https://github.com/JoseDarioGonzalezCha.png",
    nombreColab: "José Gonzalez",
    puestoColab: "Dev FullStack"
  }
  ]);

  const cambioMostrar = ()=>{
    actualizarFormulario(!mostrarFormulario);
  }

  //registro de colaboradores
  const registroColaborador = (colaborador)=>{
    //console.log("Nuevo Colaborador UwU", colaborador); 
    //Spread operator
    mostrarDatos([...datos,colaborador]);
  }

  //eliminar Colaborador
  const eliminarColaborador = ()=>{
    console.log ("Eliminando un componente");
  }

  //actualizar color de equipos
  const cambioColor = (color, id)=>{
    const datosActualizados = listaEquipos.map((equipoAct)=>{
      if(equipoAct.id === id){
        equipoAct.colorPrimario = color; 
      }

      return equipoAct;
    })
    actualizarListaEquipos(datosActualizados);
  }

  //Ternario --> condicion ? semuestra : noseMuestra

  return (
    <div>
      <Encabezado/>
      {mostrarFormulario && <Formulario 
        equipos={listaEquipos.map((tituloEquipo)=> tituloEquipo.titulo)}
        registro = {registroColaborador}
      />}

      <MiOrg estado={cambioMostrar}/>
      
      {
        listaEquipos.map( (equipo)=> <Equipo 
          nombreEquipo={equipo} 
          key={equipo.titulo}
          colaboradores = {datos.filter( colaborador =>colaborador.equipoColab===equipo.titulo)}
          eliminarColab={eliminarColaborador}
          colorUsuario = {cambioColor}
        />)
      }

      <Footer />

    </div>
  );
}

export default App;