import "./colaborador.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"

const Colaborador = (props)=>{

    const {nombreColab,puestoColab,fotoColab,id,fav} = props.datos;
    const {colorFondo,eliminarTarjeta,favoritoEq} = props;
    const fondoTarjeta = {backgroundColor: colorFondo}

    return <div className="tarjetaColaborador">
        <AiFillCloseCircle onClick={()=>eliminarTarjeta(id)} className="eliminar"/>
        <div className="encabezado" style={fondoTarjeta}>
            <img src={fotoColab} alt={nombreColab}/>
        </div>
        <div className="informacion">
            <h4>{nombreColab}</h4>
            <h5>{puestoColab}</h5>
            {fav ? <AiFillHeart color="red" onClick={() => favoritoEq(id)} className="fav"/> 
            : <AiOutlineHeart onClick={()=>favoritoEq(id)} className="fav"/>}
        </div>
    </div>
}

export default Colaborador; 