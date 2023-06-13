import "./campos.css"; 

const Campos = (props) =>{
    const textoDescripcion = `${props.descripcion}...`;
    const {tipo = "text"} = props;

    const valorInput = (event) =>{
        props.actualizarValor(event.target.value); 
    }

    return <div className={`campo campo-${tipo}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={textoDescripcion} 
            required={props.importancia} 
            value={props.valor}
            onChange={valorInput}
            type={tipo}
        />
    </div>
}

export default Campos; 