import "./equipo.css"; 

const Equipo = (props)=>{

    const {colorPrimario, colorSecundario, titulo} = props.nombreEquipo;

    const coloresSecundarios = {backgroundColor: colorSecundario}
    const colorBorde = {borderColor: colorPrimario}

    return <section className='equipo' style={coloresSecundarios}>
        <h3 style={colorBorde}>{titulo}</h3>
        <div className='colaboradores'>

        </div>
    </section>
}

export default Equipo; 