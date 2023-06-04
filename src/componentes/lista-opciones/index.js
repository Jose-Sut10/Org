import "./lista-opciones.css"; 

const ListaOpciones = ()=>{
    //metodo map -> arreglo.map( (equipos, posicion)=> {
    // return <option></option>
   // }); 
    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil", 
        "Innovación y Gestión"
    ]; 

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
            {equipos.map( (nombre_equipo,posicion)=> <option key={posicion}>
                {nombre_equipo}</option> )}
        </select>
    </div>
}

export default ListaOpciones; 