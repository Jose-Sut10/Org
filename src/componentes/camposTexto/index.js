import "./campos-texto.css"; 

const CamposTexto = (props) =>{
    const textoDescripcion = `${props.descripcion}...`;

    const valorInput = (event) =>{
        props.actualizarValor(event.target.value); 
    }

    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input 
            placeholder={textoDescripcion} 
            required={props.importancia} 
            value={props.valor}
            onChange={valorInput}
        />
    </div>
}

export default CamposTexto; 