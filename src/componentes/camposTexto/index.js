import "./campos-texto.css"; 

const CamposTexto = (props) =>{
    const textoDescripcion = `${props.descripcion}...`;
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input placeholder={textoDescripcion}/>
    </div>
}

export default CamposTexto; 