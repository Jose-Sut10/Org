import "./colaborador.css"

const Colaborador = (props)=>{

    const {nombreColab,puestoColab,fotoColab,equipoColab} = props.datos;
    const {colorFondo} = props;
    const fondoTarjeta = {backgroundColor: colorFondo}

    return <div className="tarjetaColaborador">
        <div className="encabezado" style={fondoTarjeta}>
            <img src={fotoColab} alt={nombreColab}/>
        </div>
        <div className="informacion">
            <h4>{nombreColab}</h4>
            <h5>{puestoColab}</h5>
        </div>
    </div>
}

export default Colaborador; 