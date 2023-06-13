import { useState } from "react";
import "./formulario.css";
import Campos from "../campos";
import ListaOpciones from "../lista-opciones";
import BotonCrear from "../boton";

const Formulario = (props) =>{

    const [nombre,actualizarNombre] = useState("");
    const [puesto,actualizarPuesto] = useState(""); 
    const [foto,actualizarFoto] = useState(""); 
    const [equipo, actualizarEquipo] = useState(""); 
    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");

    const {equipos,registro,nuevoEquipo} = props

    const eventoEnviar = (event)=>{
        event.preventDefault(); 

        let datosEnviar = {
            nombreColab: nombre,
            puestoColab: puesto, 
            fotoColab: foto,
            equipoColab: equipo
        }
        //console.log(datosEnviar);
        registro(datosEnviar);  
    }

    const manejarNuevoEquipo = (event)=>{
        event.preventDefault();
        nuevoEquipo({titulo,colorPrimario: color});
    }

    return <section className="formulario">
        <form onSubmit={eventoEnviar}>
            <h2>Rellena el formulario para crear al colaborador.</h2>
            <Campos 
                titulo="Nombre" 
                descripcion="Ingresar nombre: " 
                importancia
                valor={nombre}
                actualizarValor={actualizarNombre}
            />

            <Campos 
                titulo="Puesto" 
                descripcion="Ingresar puesto: " 
                importancia
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />

            <Campos 
                titulo="Foto" 
                descripcion="Ingresar URL de la foto: " 
                importancia
                valor={foto}
                actualizarValor={actualizarFoto}
            />

            <ListaOpciones 
                valor = {equipo}
                actualizarValor = {actualizarEquipo}
                nombreEquipos={equipos}
            />
            <BotonCrear>
                Crear
            </BotonCrear>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campos 
                titulo="Título" 
                descripcion="Ingresar título: " 
                importancia
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />

            <Campos 
                titulo="Color" 
                descripcion="Ingresar el color en hexadecimal: " 
                importancia
                valor={color}
                actualizarValor={actualizarColor}
                tipo="color"
            />

            <BotonCrear>Crear Equipo</BotonCrear>
        </form>
    </section>
}

export default Formulario; 