import "./boton.css";

const BotonCrear = (props)=>{
    return <div>
        <button className="botonEnviar">{props.children}</button>
    </div> 
}
// spa = SIngle Page Appliccation
export default BotonCrear; 