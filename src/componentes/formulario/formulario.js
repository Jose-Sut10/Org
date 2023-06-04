import "./formulario.css";
import CamposTexto from "../camposTexto";

const Formulario = () =>{
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para tener el colaborador.</h2>
            <CamposTexto/>
        </form>
    </section>
}

export default Formulario; 