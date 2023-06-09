import "./colaborador.css"

const Colaborador = (props)=>{

    const {nombreColab,puestoColab,fotoColab,equipoColab} = props.datos;
    const {colorFondo,eliminarTarjeta} = props;
    const fondoTarjeta = {backgroundColor: colorFondo}

    return <div className="tarjetaColaborador">
        <span onClick={eliminarTarjeta}>D</span>
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