import { useState } from "react";
import "./formulario.css";
import CamposTexto from "../camposTexto";
import ListaOpciones from "../lista-opciones";
import BotonCrear from "../boton";

const Formulario = () =>{

    const [nombre,actualizarNombre] = useState("");
    const [puesto,actualizarPuesto] = useState(""); 
    const [foto,actualizarFoto] = useState(""); 
    const [equipo, actualizarEquipo] = useState(""); 

    const eventoEnviar = (event)=>{
        event.preventDefault(); 

        let datosEnviar = {
            nombreColab: nombre,
            puestoColab: puesto, 
            fotoColab: foto,
            equipoColab: equipo
        }
        console.log(datosEnviar); 
    }

    return <section className="formulario">
        <form onSubmit={eventoEnviar}>
            <h2>Rellena el formulario para tener el colaborador.</h2>
            <CamposTexto 
                titulo="Nombre" 
                descripcion="Ingresar nombre: " 
                importancia
                valor={nombre}
                actualizarValor={actualizarNombre}
            />

            <CamposTexto 
                titulo="Puesto" 
                descripcion="Ingresar puesto: " 
                importancia
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />

            <CamposTexto 
                titulo="Foto" 
                descripcion="Ingresar URL de la foto: " 
                importancia
                valor={foto}
                actualizarValor={actualizarFoto}
            />

            <ListaOpciones 
                valor = {equipo}
                actualizarValor = {actualizarEquipo}
            />
            <BotonCrear>
                Crear
            </BotonCrear>
        </form>
    </section>
}

export default Formulario; 