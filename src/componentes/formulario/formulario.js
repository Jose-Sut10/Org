import "./formulario.css";
import CamposTexto from "../camposTexto";
import ListaOpciones from "../lista-opciones";

const Formulario = () =>{
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para tener el colaborador.</h2>
            <CamposTexto titulo="Nombre" descripcion="Ingresar nombre: "/>
            <CamposTexto titulo="Puesto" descripcion="Ingresar puesto: "/>
            <CamposTexto titulo="Foto" descripcion="Ingresar URL de la foto: "/>
            <ListaOpciones/>
        </form>
    </section>
}

export default Formulario; 