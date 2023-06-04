import "./formulario.css";
import CamposTexto from "../camposTexto";
import ListaOpciones from "../lista-opciones";
import BotonCrear from "../boton";

const Formulario = () =>{

    const eventoEnviar = (event)=>{
        event.preventDefault(); 
    }

    return <section className="formulario">
        <form onSubmit={eventoEnviar}>
            <h2>Rellena el formulario para tener el colaborador.</h2>
            <CamposTexto titulo="Nombre" descripcion="Ingresar nombre: " importancia/>
            <CamposTexto titulo="Puesto" descripcion="Ingresar puesto: " importancia/>
            <CamposTexto titulo="Foto" descripcion="Ingresar URL de la foto: " importancia/>
            <ListaOpciones />
            <BotonCrear>
                Crear
            </BotonCrear>
        </form>
    </section>
}

export default Formulario; 