import { useState } from 'react';
import './App.css';
import Encabezado from './componentes/header/header';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/equipo';
import Footer from './componentes/footer';

function App() {
  const [mostrarFormulario, actualizarFormulario] = useState(false);
  const [datos, mostrarDatos] = useState([
    {
    equipoColab: "Front End",
    fotoColab: "https://github.com/harlandlohora.png",
    nombreColab: "Harland Lohora",
    puestoColab: "Instructor"
  },
  {
    equipoColab: "Programación",
    fotoColab: "https://github.com/genesysaluralatam.png",
    nombreColab: "Genesys Rondón",
    puestoColab: "Desarrolladora de software e instructora"
  },
  {
    equipoColab: "Programación",
    fotoColab: "https://github.com/christianpva.png",
    nombreColab: "Christian Velasco",
    puestoColab: "Head de Alura e instructor"
  },
  {
    equipoColab: "UX y Diseño",
    fotoColab: "https://github.com/JeanmarieAluraLatam.png",
    nombreColab: "Jeanmarie Quijada",
    puestoColab: "Instructora en Alura Latam"
  },
  {
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
  const cambioColor = (color, titulo)=>{
    console.log("actaulizando color", color, titulo);
  }

  //Ternario --> condicion ? semuestra : noseMuestra

  const listaEquipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278", 
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA", 
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157", 
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69", 
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF", 
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05", 
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29", 
      colorSecundario: "#FFEEDF"
    },
  ];

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