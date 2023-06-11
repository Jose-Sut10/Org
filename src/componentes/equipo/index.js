import "./equipo.css"; 
import Colaborador from "../tarjeta_colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props)=>{

    const {colorPrimario, colorSecundario, titulo} = props.nombreEquipo;
    const {colaboradores,eliminarColab,colorUsuario} = props;

    const coloresSecundarios = {backgroundColor: hexToRgba(colorPrimario,0.6)}
    const colorBorde = {borderColor: colorPrimario}

    return <> {colaboradores.length>0 &&
        <section className='equipo' style={coloresSecundarios}>
            <input className="input__color"
                type="color"
                value={colorPrimario}
                onChange={(event)=>{
                    colorUsuario(event.target.value,titulo);
                }}
            />
            
            <h3 style={colorBorde}>{titulo}</h3>
            <div className='colaboradores'>
                {
                    colaboradores.map((colaborador,posicion)=> <Colaborador 
                        datos={colaborador}
                        key={posicion}
                        colorFondo={colorPrimario}
                        eliminarTarjeta = {eliminarColab}
                        />)
                }
        </div>
    </section>
    }</>
}

export default Equipo; 