import "./equipo.css"; 
import Colaborador from "../tarjeta_colaborador";

const Equipo = (props)=>{

    const {colorPrimario, colorSecundario, titulo} = props.nombreEquipo;
    const {colaboradores} = props;

    const coloresSecundarios = {backgroundColor: colorSecundario}
    const colorBorde = {borderColor: colorPrimario}

    return <> {colaboradores.length>0 &&
        <section className='equipo' style={coloresSecundarios}>
        <h3 style={colorBorde}>{titulo}</h3>
        <div className='colaboradores'>
            {
                colaboradores.map((colaborador,posicion)=> <Colaborador 
                    datos={colaborador}
                    key={posicion}
                    colorFondo={colorPrimario}
                    />)
            }
        </div>
    </section>
    }</>
}

export default Equipo; 