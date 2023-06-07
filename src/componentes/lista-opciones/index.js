import "./lista-opciones.css"; 

const ListaOpciones = (props)=>{
    //metodo map -> arreglo.map( (equipos, posicion)=> {
    // return <option></option>
   // });
    const manejoCambios = (event)=>{
        props.actualizarValor(event.target.value); 
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejoCambios}>
            <option value="" disabled defaultValue="" hidden>
                Seleccionar equipo
            </option>
            {props.nombreEquipos.map( (nombre_equipo,posicion)=> <option key={posicion} value={nombre_equipo}>
                {nombre_equipo}</option> )}
        </select>
    </div>
}

export default ListaOpciones; 