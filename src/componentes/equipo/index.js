import "./equipo.css"; 
import Colaborador from "../tarjeta_colaborador";

const Equipo = (props)=>{

    const {colorPrimario, colorSecundario, titulo} = props.nombreEquipo;

    const coloresSecundarios = {backgroundColor: colorSecundario}
    const colorBorde = {borderColor: colorPrimario}

    return <section className='equipo' style={coloresSecundarios}>
        <h3 style={colorBorde}>{titulo}</h3>
        <div className='colaboradores'>
            <Colaborador/>
            <Colaborador/>
            <Colaborador/>
            <Colaborador/>
            <Colaborador/>
            <Colaborador/>
        </div>
    </section>
}

export default Equipo; 